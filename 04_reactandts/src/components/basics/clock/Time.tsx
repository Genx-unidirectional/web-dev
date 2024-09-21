function Time({ color, time }: { color: string; time: string }) {
  return (
    <h1 className="text-4xl font-bold" style={{ color: color }}>
      {time}
    </h1>
  );
}
export default Time;
