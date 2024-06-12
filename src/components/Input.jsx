import { forwardRef } from "react";

const input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  const inputStyle =
    " mb-4 bg-stone-300 rounded-sm border-b-gray-400 border-b-[1.5px] w-full p-1 focus:border-b-gray-900 outline-none";
  return (
    <div>
      <label className=" font-medium uppercase block mb-1">{label}</label>
      {textArea ? (
        <textarea ref={ref} className={inputStyle} {...props}></textarea>
      ) : (
        <input ref={ref}  className={inputStyle} {...props} />
      )}
    </div>
  );
});

export default input;
