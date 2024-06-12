import AddTask from "./AddTask";
export default function Tasks({ tasks, onAdd, onDeleto }) {
  console.log(tasks);
  return (
    <>
      <h1 className=" text-stone-700 font-bold text-3xl capitalize">Tasks</h1>
      <AddTask onAdd={onAdd} />
      {!tasks && <p>This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <ul className=" p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className=" flex justify-between my-4">
              <span>{task.text}</span>{" "}
              <button
                onClick={()=>onDeleto(task.id)}
                className=" text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
