import ContactManager from "@/components/state/emailchange";
import Gallery from "@/components/state/ImageChange";

function Basics() {
  const content = [
    {
      name: "EmailChange",
      component: <ContactManager />,
    },
    {
      name: "Gallery",
      component: <Gallery />,
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
