import { Button, Form, Select, Input } from "antd";
import { Navbar } from "@/pages/index.js";

export default function Create() {
  return (
    <Navbar>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Create Post</h1>
        <Button>Save</Button>
      </div>
      <Form
        labelCol={{
          span: 4,
        }}
      >
        <Form.Item label="Created By">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Body">
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Navbar>
  );
}
