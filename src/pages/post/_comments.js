import { useState, useEffect } from "react";
import { Table, Divider, Button, notification, Popconfirm } from "antd";
import { deleteComment, getComments } from "@/services/typicode";
import FormComment from "./_form_comment";

export default function Comment({ postId }) {
  if (!postId) return;

  const [open, setOpen] = useState(false);
  const [viewedCommentId, viewComment] = useState();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getComments(postId).then((data) => setDataSource(data));
  }, []);

  const closeFormComment = () => {
    setOpen(false);
    viewComment(null);
  };

  const doDeleteComment = (id) => {
    deleteComment(id).then(() => {
      notification.success({
        message: "Success delete comment",
        placement: "bottomLeft",
      });
    });
  };

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
            <button
              onClick={() => {
                viewComment(record.id);
                setOpen(true);
              }}
            >
              Update
            </button>
            <Divider type="vertical" />
            <Popconfirm
              title="Delete Comment"
              description="Are you sure to delete this comment?"
              onConfirm={() => doDeleteComment(record.id)}
              okText="Yes"
              cancelText="No"
              okType="default"
            >
              <button>Delete</button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex justify-between py-3">
        <h3 className="text-base font-semibold">Comments</h3>
        <Button onClick={() => setOpen(true)}>Add</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <FormComment
        open={open}
        close={closeFormComment}
        commentId={viewedCommentId}
      />
    </>
  );
}
