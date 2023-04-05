const BASEURL = "https://jsonplaceholder.typicode.com/";

const fetcher = (path) => fetch(`${BASEURL}${path}`).then((res) => res.json());

export const getUsers = () => fetcher("users");
