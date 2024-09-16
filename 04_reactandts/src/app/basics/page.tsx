import AppCrash from "@/components/basics/AppCrash";
import Counter from "@/components/basics/Counter";
import MyButton from "@/components/basics/MyButton";
import ProductStock from "@/components/basics/ProductStock";
import TicTacToe from "@/components/basics/TicTacToe";

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
