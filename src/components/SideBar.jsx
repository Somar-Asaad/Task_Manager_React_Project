import CustomeButton from "./CustomeButton";
export default function SideBar({
  onStartAddProjectClicked,
  projects,
  handleProjectSelection,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 rounded-r-md w-1/3 text-stone-50 px-8 py-16 md:w-72">
      <h2 className=" mb-8 md:text-2xl  font-bold uppercase">Your Project</h2>
      <div>
        <CustomeButton onClick={onStartAddProjectClicked}>
          + Add Project
        </CustomeButton>
      </div>
      <ul className=" mt-8">
        {projects.map((project) => {
          let cssClass =
            " hover:bg-stone-700 px-4 py-1 rounded-sm hover:text-stone-200 w-full text-left";
          if (project.id === selectedProjectId) {
            cssClass += "bg-stone-700 text-stone-200";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => handleProjectSelection(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
