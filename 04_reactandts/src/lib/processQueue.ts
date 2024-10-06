export function getFinalState(
  baseState: number,
  queue: ({ (n: number): number } | number)[]
) {
  let finalState = baseState;
  for (let i = 0; i < queue.length; i++) {
    if (typeof queue[i] === "function") {
      finalState = (queue[i] as (n: number) => number)(finalState);
    } else {
      finalState = queue[i] as number;
    }
  }
  return finalState;
}
