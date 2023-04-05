import { createComment, getComment, updateComment } from "@/services/typicode";
import { Modal, Form, Input, Button, notification } from "antd";
import { useEffect } from "react";
export default function FormComment({ open, close, commentId }) {
  const [formInstance] = Form.useForm();

  const closeModal = () => {
    close();
    formInstance.resetFields();
  };

  useEffect(() => {
    if (open && commentId) {
      getComment(commentId).then((data) => formInstance.setFieldsValue(data));
    }
  }, [open, commentId]);

  const save = (data) => {
    if (commentId) {
      updateComment(commentId, data).then(() => {
        notification.success({
          message: "Success update comment!",
          placement: "bottomLeft",
        });
        closeModal();
      });
    } else {
      createComment(data).then(() => {
        notification.success({
          message: "Success adding comment!",
          placement: "bottomLeft",
        });
        closeModal();
      });
    }
  };

  return (
    <Modal
      open={open}
      onCancel={closeModal}
      footer={<Button onClick={formInstance.submit}>Save</Button>}
      title={`${commentId ? "Update" : "Add"} Comment`}
      centered
    >
      <Form
        form={formInstance}
        labelCol={{
          span: 4,
        }}
        onFinish={save}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Body" name="body">
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
