import { Menu } from "antd";
import { useRouter } from "next/navigation";

const items = [
  {
    label: "User",
    key: "/user",
  },
  {
    label: "Post",
    key: "/post",
  },
  {
    label: "Album",
    key: "/album",
  },
];

export default function withNavbar(WrappedComponent, activeMenu) {
  return ({ children, ...props }) => {
    const { push } = useRouter();

    const onClick = (e) => {
      push(e.key);
    };
    return (
      <div className="max-w-screen-lg m-auto">
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={items}
          selectedKeys={[activeMenu]}
          className="mb-10"
        />
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </div>
    );
  };
}
