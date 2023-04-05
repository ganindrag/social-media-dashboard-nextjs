import { Button, Form as AntdForm, notification } from "antd";
import { useRouter } from "next/router";
import withNavbar from "@/hocs/withNavbar";
import { getPost, updatePost } from "@/services/typicode";
import Form from "../_form";
import { useState, useEffect } from "react";

const Update = () => {
  const { push, query } = useRouter();
  const [formInstance] = AntdForm.useForm();
  const [dataPost, setDataPost] = useState();

  useEffect(() => {
    if (query.id) getPost(query.id).then((data) => setDataPost(data));
  }, [query.id]);

  const onSubmit = (data) => {
    updatePost(query.id, data).then(() => {
      notification.success({
        message: "Success update post!",
        placement: "bottomLeft",
      });
      push("/post");
    });
  };

  if (!dataPost) return "loading...";

  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Update Post</h1>
        <Button onClick={formInstance.submit}>Save Update</Button>
      </div>
      <Form
        formInstance={formInstance}
        onSubmit={onSubmit}
        initialValues={dataPost}
      />
    </>
  );
};

export default withNavbar(Update, "post");
