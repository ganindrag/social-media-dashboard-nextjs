import { Table, Divider, Button, Form, Popconfirm, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import withNavbar from "@/hocs/withNavbar";
import { useEffect, useState } from "react";
import { getPosts, getUsers, deletePost } from "@/services/typicode";
import CmbUsers from "@/components/CmbUsers";

const Post = () => {
  const router = useRouter();
  const [filterUserId, setFilterUserId] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [users, setusers] = useState({});

  useEffect(() => {
    setFilterUserId(router.query.userId);
  }, [router.query.userId]);

  useEffect(() => {
    getUsers()
      .then((data) =>
        setusers((userState) => {
          if (!userState) userState = {};
          data.forEach((user) => (userState[user.id] = user.name));
          return userState;
        })
      )
      .then(() => getPosts(filterUserId).then((data) => setDataSource(data)));
  }, [filterUserId]);

  const doDeletePost = (id) => {
    deletePost(id).then(() => {
      notification.success({
        message: "Success delete post",
        placement: "bottomLeft",
      });
    });
  };

  const columns = [
    {
      title: "Created By",
      dataIndex: "userId",
      key: "userId",
      render(userid) {
        return users[userid];
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <Link href={`post/${record.id}`}>View</Link>
            <Divider type="vertical" />
            <Link href={`post/update/${record.id}`}>Update</Link>
            <Divider type="vertical" />
            <Popconfirm
              title="Delete Post"
              description="Are you sure to delete this post?"
              onConfirm={() => doDeletePost(record.id)}
              okText="Yes"
              cancelText="No"
              okType="default"
            >
              <button>Delete</button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Post</h1>
        <Button onClick={() => router.push("/post/create")}>Create</Button>
      </div>
      <Form.Item label="Created by">
        <CmbUsers
          onChange={(userId) => setFilterUserId(userId)}
          value={
            filterUserId
              ? { label: users[filterUserId], value: filterUserId }
              : null
          }
        />
      </Form.Item>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default withNavbar(Post, "post");
