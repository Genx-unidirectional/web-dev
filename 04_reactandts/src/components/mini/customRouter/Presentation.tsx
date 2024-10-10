import CN from "@/lib/utils";

function Presentation({
  children,
  isPending,
}: {
  children: JSX.Element;
  isPending: boolean;
}) {
  return (
    <div className="flex flex-col  text-black items-center h-[600px] w-[500px]">
      <section
        className={CN("bg-black text-white w-full ", {
          "opacity-65": isPending,
        })}
      >
        Music World
      </section>
      <main className="flex-1">{children}</main>
    </div>
  );
}
export default Presentation;
