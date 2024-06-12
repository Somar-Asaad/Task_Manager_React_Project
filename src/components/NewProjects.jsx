import Input from "./Input";
import Dialog from "./dialog";
import CustomeButton from "./CustomeButton";
import { useRef } from "react";
// style the dialog using tailwind
// make the cancel button functional

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Dialog ref={modal} buttonCaption="Okay">
        <h1 className=" font-bold text-xl text-stone-700 mb-2">
          Invalid input
        </h1>
        <p className=" text-stone-600 text-lg mb-2">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className=" text-stone-600 text-lg mb-2">
          Please make sure you provide a valid value for every input field.
        </p>
      </Dialog>
      <div className=" w-[35rem] mx-8">
        <div className="buttons flex justify-end items-center my-10">
          <button className=" text-stone-950 font-medium mr-5" onClick={onCancel}>Cancel</button>
          <CustomeButton onClick={handleSave}>Save</CustomeButton>
        </div>
        <div className="inputs">
          <Input ref={title} label="title" />
          <Input ref={description} label="description" textArea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
