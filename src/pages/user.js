import { useState, useEffect } from "react";
import withNavbar from "@/hocs/withNavbar";
import { getUsers } from "@/services/typicode";
import { Table, Divider } from "antd";
import Link from "next/link";

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "City",
    dataIndex: ["address", "city"],
    key: "city",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    render: (_, record) => {
      return (
        <>
          <Link href={`post?userId=${record.id}`}>See Posts</Link>
          <Divider type="vertical" />
          <Link href={`album?userId=${record.id}`}>See Albums</Link>
        </>
      );
    },
  },
];

const User = () => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getUsers().then((data) => setDataSource(data));
  }, []);
  return (
    <>
      <h1 className="text-xl font-bold py-3">User</h1>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </>
  );
};

export default withNavbar(User, "user");
