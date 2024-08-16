import { Dispatch, SetStateAction } from "react";

type PropType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

function MyButton({ count, setCount }: PropType) {
  return <button onClick={() => setCount(count + 1)}>Change</button>;
}
export default MyButton;
