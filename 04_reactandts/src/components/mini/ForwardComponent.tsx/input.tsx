import { forwardRef, useImperativeHandle, useRef } from "react";
interface PropsType {}
type RefType = {
  focus: () => void;
};
const ControlledInput = forwardRef<RefType, PropsType>((props, ref) => {
  const refContainer = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      refContainer.current?.focus();
    },
  }));
  return <input type="text" ref={refContainer} />;
});

export default ControlledInput;
