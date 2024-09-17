import AppCrash from "@/components/basics/AppCrash";
import Counter from "@/components/basics/Counter";
import MyButton from "@/components/basics/MyButton";
import PendingProblem from "@/components/basics/PendingProblem";
import ProductStock from "@/components/basics/ProductStock";
import TaskQueue from "@/components/basics/TaskQueue";
import TicTacToe from "@/components/basics/TicTacToe";
import Traffic from "@/components/basics/Traffic";

function Basics() {
  const content = [
    // {
    //     name:"tictactoe",
    //     component:
    // },
    {
      name: "button",
      component: <MyButton />,
    },
    {
      name: "Counter",
      component: <Counter />,
    },
    {
      name: "TicTacToe",
      component: <TicTacToe />,
    },
    {
      name: "ProductStock",
      component: <ProductStock />,
    },
    {
      name: "AppCrash",
      component: <AppCrash />,
    },
    {
      name: "Traffic",
      component: <Traffic />,
    },
    {
      name: "Pending Problem",
      component: <PendingProblem />,
    },
    {
      name: "Task Queue",
      component: <TaskQueue />,
    },
  ];
  return (
    <div className="min-h-screen w-full">
      {content.map((item) => {
        return (
          <div
            key={`${item.name}a`}
            className="flex h-screen w-full justify-center items-center"
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
export default Basics;