import { Menu } from "antd";

const items = [
  {
    label: "User",
    key: "user",
  },
  {
    label: "Post",
    key: "post",
  },
  {
    label: "Album",
    key: "album",
  },
];

const onClick = (e) => {
  console.log("click ", e);
};

export const Navbar = ({ children }) => (
  <div className="max-w-screen-lg m-auto">
    <Menu
      onClick={onClick}
      mode="horizontal"
      items={items}
      selectedKeys={["user"]}
      className="mb-10"
    />
    {children}
  </div>
);

export default function Home() {
  return (
    <Navbar>
      <h1>welcome</h1>
    </Navbar>
  );
}
