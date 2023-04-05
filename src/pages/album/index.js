import { Table, Divider, Button, Form, Select } from "antd";
import Link from "next/link";
import withNavbar from "@/hocs/withNavbar";

const users = { 1: "Leanne Graham", 2: "Ervin Howell" };

const dataSource = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 2,
    id: 3,
    title: "omnis laborum odio",
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
          <Link href={`post/${record.id}`}>View Photos</Link>
        </>
      );
    },
  },
];

const Album = () => {
  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Album</h1>
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

export default withNavbar(Album, "album");
