function MyButton({ content = "Click here" }: { content?: string }) {
  return (
    <button className="bg-black text-white p-2 rounded-md text-2xl ">
      content
    </button>
  );
}
export default MyButton;
