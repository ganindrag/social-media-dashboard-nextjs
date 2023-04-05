import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withNavbar from "@/hocs/withNavbar";
import { getPost } from "@/services/typicode";
import Comment from "./_comments";

const View = () => {
  const router = useRouter();
  const [dataPost, setDataPost] = useState({});

  useEffect(() => {
    if (router.query.id)
      getPost(router.query.id).then((data) => setDataPost(data));
  }, [router.query.id]);
  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Post</h1>
      </div>
      <div className="text-center mb-5">
        <h2 className="text-lg font-semibold">{dataPost.title}</h2>
        <p>{dataPost.body}</p>
      </div>
      <Comment postId={dataPost.id} />
    </>
  );
};

export default withNavbar(View, "post");
