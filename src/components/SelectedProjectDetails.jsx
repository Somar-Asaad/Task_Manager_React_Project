import Tasks from "./Tasks";
export function SelectedProjectDetails({
  project,
  onDelete,
  onAdd,
  onDeleto,
  tasks,
}) {
  const date = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className=" w-[34rem] mt-4  p-4 mb-4">
      <header>
        <div className=" flex justify-between items-center ">
          <h1 className=" text-stone-700 font-bold text-3xl capitalize">
            {project.title}
          </h1>
          <button
            className=" text-stone-600 hover:text-stone-900"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className=" text-stone-400 font-bold my-3">{date}</p>
        <p className=" pb-4 mb-3 whitespace-pre-wrap border-b-stone-300 border-b-2 font-medium text-stone-600">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAdd} onDeleto={onDeleto} />
    </div>
  );
}
