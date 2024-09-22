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
import ContactManager from "@/components/state/emailchange";

function Basics() {
  const content = [
    {
      name: "EmailChange",
      component: <ContactManager />,
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
