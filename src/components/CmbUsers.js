import { getUsers } from "@/services/typicode";
import { Select } from "antd";
import { useEffect, useState } from "react";

export default function CmbUsers(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getUsers().then((data) =>
      setOptions(data.map((user) => ({ label: user.name, value: user.id })))
    );
  }, []);

  return <Select placeholder="All" allowClear options={options} {...props} />;
}
