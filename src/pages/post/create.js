import { Button, Form as AntdForm, notification } from "antd";
import { useRouter } from "next/router";
import withNavbar from "@/hocs/withNavbar";
import { createPost } from "@/services/typicode";
import Form from "./_form";

const Create = () => {
  const { push } = useRouter();
  const [formInstance] = AntdForm.useForm();

  const onSubmit = (data) => {
    createPost(data).then(() => {
      notification.success({
        message: "Success create post!",
        placement: "bottomLeft",
      });
      push("/post");
    });
  };

  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Create Post</h1>
        <Button onClick={formInstance.submit}>Save</Button>
      </div>
      <Form formInstance={formInstance} onSubmit={onSubmit} />
    </>
  );
};

export default withNavbar(Create, "post");
