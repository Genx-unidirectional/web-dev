import Counter from "@/components/basics/Counter";
import MyButton from "@/components/basics/MyButton";

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
