import Accordion from "@/components/mini/Accordion";
import Form from "@/components/mini/reacthookform/ReactHookForm";
import SimpleForm from "@/components/mini/SimpleForm";

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
