function doSomething(input: Array<string>) {}

//above is same as below

function doSomething2(input: string[]) {}

function Test3(arr: readonly string[]) {}

function Test4(arr: ReadonlyArray<string>) {}

function Test5(...arr: string[]) {}
function Test6(arr: [number, boolean]) {}

function Test7(...arr: [number, string, boolean[]]) {}

function Either2DOr2D(input: [number, number, number?]) {}
3;
