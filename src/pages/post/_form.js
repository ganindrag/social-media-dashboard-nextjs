import { Form as AntdForm, Input } from "antd";
import CmbUsers from "@/components/CmbUsers";

export default function Form({ formInstance, onSubmit, initialValues }) {
  return (
    <AntdForm
      form={formInstance}
      name="post"
      labelCol={{
        span: 4,
      }}
      onFinish={onSubmit}
      initialValues={initialValues}
    >
      <AntdForm.Item label="Created By" name="userId">
        <CmbUsers allowClear={false} />
      </AntdForm.Item>
      <AntdForm.Item label="Title" name="title">
        <Input />
      </AntdForm.Item>
      <AntdForm.Item label="Body" name="body">
        <Input.TextArea rows={4} />
      </AntdForm.Item>
    </AntdForm>
  );
}
