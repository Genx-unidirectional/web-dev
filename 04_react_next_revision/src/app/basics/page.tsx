function Basics() {
  const componentArr: {
    name: string;
    component: JSX.Element;
  }[] = [
    // {
    //   name: "button",
    //   component: <Button />,
    // },
  ];
  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      {componentArr.map((item) => {
        return (
          <div
            key={`${item.name}x1`}
            className="h-screen w-full justify-center flex items-center"
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
export default Basics;
