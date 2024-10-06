import VariableUpdate from "@/components/effects/VaiableUpdate";
import { ReactElement } from "react";

function page() {
  const componentArr: { name: string; component: ReactElement }[] = [
    {
      name: "variable update",
      component: <VariableUpdate />,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-whites">
      {componentArr.map((item) => {
        return (
          <div className="h-screen w-full flex justify-center items-center">
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
export default page;
