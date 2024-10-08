import AppCrash from "@/components/basics/AppCrash";
import Clock from "@/components/basics/clock/Clock";
import Counter from "@/components/basics/Counter";
import MailClient from "@/components/basics/disappearingSelection";
import DraggableBox from "@/components/basics/Draggable/DraggableBox";
import MyButton from "@/components/basics/MyButton";
import PendingProblem from "@/components/basics/PendingProblem";
import ProductStock from "@/components/basics/ProductStock";
import ShoppingCart from "@/components/basics/ShoppingCart";
import TaskQueue from "@/components/basics/TaskQueue";
import TicTacToe from "@/components/basics/TicTacToe";
import Togglebg from "@/components/basics/Togglebg";
import Traffic from "@/components/basics/Traffic";

function Basics() {
  const content = [
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

    {
      name: "Product Cart",
      component: <ShoppingCart />,
    },
    {
      name: "Background toggler",
      component: <Togglebg />,
    },
    {
      name: "Clock",
      component: <Clock />,
    },
    {
      name: "Mail client",
      component: <MailClient />,
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
