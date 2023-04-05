import { Card, Modal } from "antd";
import { Navbar } from "@/pages/index.js";
import Link from "next/link";
import { useState } from "react";
import withNavbar from "@/hocs/withNavbar";

const Photo = () => {
  const [open, setOpen] = useState(false);
  const [viewedPhoto, setViewedPhoto] = useState();
  const openImage = (data) => {
    setOpen(true);
    setViewedPhoto(data);
  };
  return (
    <>
      <div className="flex justify-between py-3">
        <h1 className="text-xl font-bold">Album Photos</h1>
      </div>
      <h2 className="text-lg font-semibold">Album: {dataAlbum.title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {dataPhoto.map((photo) => {
          return (
            <Card
              cover={<img alt="example" src={photo.thumbnailUrl} />}
              hoverable
              onClick={() => openImage(photo)}
              key={photo.id}
            >
              <Card.Meta title={photo.title} />
            </Card>
          );
        })}
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title={viewedPhoto?.title}
      >
        <img
          src={viewedPhoto?.url}
          className="w-full h-full object-contain object-center"
        />
      </Modal>
    </>
  );
};

export default withNavbar(Photo, "album");
