let a1: number;
let a2: boolean;
let a3: string;
let a4: (string | number)[];
let a5: null;
let a6: undefined;
let a7: unknown;
let a8: never;
let a9: [number, boolean, string] = [12, false, "tim"];

let a10 = [12, false, "tim"];

a10 = a9;

// a9 =a10 can't do this
