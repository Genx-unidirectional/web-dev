import { Dispatch, SetStateAction, useTransition } from "react";

type PropsType = {
  tabName: string;
  setTab: Dispatch<SetStateAction<string>>;
  isACtive: boolean;
};
function TabButton({ tabName, setTab, isACtive }: PropsType) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="mx-6"
      onClick={() =>
        startTransition(() => {
          setTab(tabName);
        })
      }
    >
      {tabName}
    </button>
  );
}
export default TabButton;
