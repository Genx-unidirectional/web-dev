function customIterator() {
  let value = 0;
  return {
    next: () => {
      if (value < 5) {
        return {
          item: value++,
        };
      } else {
      }
    },
  };
}

const testIterator = customIterator();
// console.log(testIterator.next()?.item);
// console.log(testIterator.next()?.item);
// console.log(testIterator.next()?.item);
// console.log(testIterator.next()?.item);

function customIterator2(start: number, end: number = Infinity, step: number) {
  let nextIndex = start;
  let iterationCount = 0;
  const rangeIterator = {
    next: () => {
      if (nextIndex < end) {
        const result = {
          value: nextIndex,
          done: false,
        };
        nextIndex += step;
        iterationCount++;
        return result;
      } else {
        return { value: iterationCount, done: true };
      }
    },
  };
  return rangeIterator;
}

const testIterator2 = customIterator2(1, 10, 2);
// console.log(testIterator2.next().value);
// console.log(testIterator2.next().value);
// console.log(testIterator2.next().value);
// console.log(testIterator2.next().value);
// console.log(testIterator2.next().value);
// console.log(testIterator2.next().done);

// we can make genrators using the generator function

function* customGenerator(
  start: number = 0,
  end: number = Infinity,
  step: number
) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const testIterator3 = customGenerator(1, 10, 2);
// console.log(testIterator3.next().value);
// console.log(testIterator3.next().value);
// console.log(testIterator3.next().value);
// console.log(testIterator3.next().value);
// console.log(testIterator3.next().value);
// console.log(testIterator3.next().value);

function* makeIterator() {
  yield 1;
  yield 2;
}

const iter = makeIterator();

for (const itItem of iter) {
  console.log(itItem);
}
console.log(iter[Symbol.iterator]() === iter);
