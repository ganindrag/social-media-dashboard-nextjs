import { Card, Modal } from "antd";
import { Navbar } from "@/pages/index.js";
import Link from "next/link";
import { useState } from "react";
import withNavbar from "@/hocs/withNavbar";

const dataAlbum = {
  userId: 1,
  id: 1,
  title: "quidem molestiae enim",
};

const dataPhoto = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
];

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