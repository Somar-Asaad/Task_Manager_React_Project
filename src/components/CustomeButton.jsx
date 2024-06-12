export default function CustomeButton({ children, ...props }) {
  return (
    <button
      className=" text-stone-100 bg-stone-950 px-5 py-2 rounded-md hover:bg-stone-800 "
      {...props}
    >
      {children}
    </button>
  );
}
