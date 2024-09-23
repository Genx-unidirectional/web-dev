import ImageCarousel from "@/components/escape/ImageCarousel";

function Basics() {
  const content = [
    {
      name: "Image Carousel",
      component: <ImageCarousel />,
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
