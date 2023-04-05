import { Table, Divider, Button, Form, Select } from "antd";
import Link from "next/link";
import withNavbar from "@/hocs/withNavbar";
import { getUsers, getAlbums } from "@/services/typicode";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CmbUsers from "@/components/CmbUsers";

const Album = () => {
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
      .then(() => getAlbums(filterUserId).then((data) => setDataSource(data)));
  }, [filterUserId]);

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
            <Link href={`album/${record.id}`}>View Photos</Link>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Album</h1>
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
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
    </>
  );
};

export default withNavbar(Album, "album");
