import { Table, Divider, Button, Modal, Form, Input } from "antd";
import { Navbar } from "@/pages/index.js";
import Link from "next/link";
import { useState } from "react";

const dataPost = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const dataSource = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

const columns = [
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
    title: "Comment",
    dataIndex: "body",
    key: "body",
    ellipsis: true,
  },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    render: (_, record) => {
      return (
        <>
          <Link href={`post/update/${record.id}`}>Update</Link>
          <Divider type="vertical" />
          <Link href={`post/delete/${record.id}`}>Delete</Link>
        </>
      );
    },
  },
];

export default function View() {
  const [open, setOpen] = useState(true);
  return (
    <Navbar>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Post</h1>
      </div>
      <div className="text-center mb-5">
        <h2 className="text-lg font-semibold">{dataPost.title}</h2>
        <p>{dataPost.body}</p>
      </div>
      <div className="flex justify-between py-3">
        <h3 className="text-base font-semibold">Comments</h3>
        <Button>Add</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button>Save</Button>}
        title="Add Comment"
        centered
      >
        <Form
          labelCol={{
            span: 4,
          }}
        >
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Body">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </Navbar>
  );
}
