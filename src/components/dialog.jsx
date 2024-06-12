import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import CustomeButton from "./CustomeButton";
const Dialog = forwardRef(function Dialog({ children, buttonCaption }, ref) {
  const localRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        localRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={localRef}
      className=" backdrop:bg-stone-900/90 rounded-md bg-stone-50 p-4 shadow-md"
    >
      {children}
      <form method="Dialog" className=" mt-4 text-right">
        <CustomeButton>{buttonCaption}</CustomeButton>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Dialog;
