import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function CN(...input: any[]) {
  return twMerge(clsx(input));
}
