import { Table, Divider, Button, Form, Select } from "antd";
import { Navbar } from "@/pages/index.js";
import Link from "next/link";
import withNavbar from "@/hoc/withNavbar";

const users = { 1: "Leanne Graham", 2: "Ervin Howell" };

const dataSource = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
];

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
          <Link href={`post/delete/${record.id}`}>Delete</Link>
        </>
      );
    },
  },
];

const Post = () => {
  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Post</h1>
        <Button>Create</Button>
      </div>
      <Form.Item label="Created by">
        <Select placeholder="All">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default withNavbar(Post, "post");
