"use client";
import { useRef } from "react";
import ControlledInput from "./input";

export default function ForwardComponent() {
  const refContainer = useRef<{
    focus: () => void;
  }>(null);
  return (
    <div>
      <button onClick={() => refContainer.current?.focus()}>Click</button>
      <ControlledInput ref={refContainer} />
    </div>
  );
}
