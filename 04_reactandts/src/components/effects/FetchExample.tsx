import { useEffect, useState } from "react";

function FetchExample() {
  const [data, setData] = useState<[{ [index: string]: any }][]>();
  useEffect(() => {
    let ignore = false;
    const fetchUser = async (url: string) => {
      const result = await fetch(url);
      if (ignore) {
        return;
      }
      //@ts-ignore
      const data = JSON.parse(result.data);
      setData(data);
    };
    fetchUser("api/example.com");
  }, []);
  return <div>FetchExample</div>;
}
export default FetchExample;
