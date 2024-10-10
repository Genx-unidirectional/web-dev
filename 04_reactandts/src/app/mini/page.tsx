import Accordion from "@/components/mini/Accordion";
import RouterComponent from "@/components/mini/customRouter";
import Form from "@/components/mini/reacthookform/ReactHookForm";
import SimpleForm from "@/components/mini/SimpleForm";
import TabTransition from "@/components/mini/transition";

function Basics() {
  const content = [
    {
      name: "Accordion ",
      component: <Accordion />,
    },
    {
      name: "Simple form ",
      component: <SimpleForm />,
    },
    {
      name: "react hook form",
      component: <Form />,
    },
    {
      name: "Tab transition",
      component: <TabTransition />,
    },
    { name: "Router", component: <RouterComponent /> },
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
