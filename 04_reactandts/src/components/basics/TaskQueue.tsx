import { getFinalState } from "../../lib/processQueue";

function increment(n: number) {
  return n + 1;
}
increment.toString = () => "n => n+1";
export default function TaskQueue() {
  return (
    <div className="text-black">
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </div>
  );
}

function TestCase({
  baseState,
  queue,
  expected,
}: {
  baseState: number;
  queue: ({ (n: number): number } | number)[];
  expected: number;
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <div>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </div>
  );
}
