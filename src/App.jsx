import SideBar from "./components/SideBar";
import NewProject from "./components/NewProjects";
import NoProjectsSelected from "./components/NoProjectsSelected";
import { SelectedProjectDetails } from "./components/SelectedProjectDetails";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProjects() {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: null,
      };
    });
  }

  function handelCancelReset() {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  function handleSelectProject(id) {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handleTaskDelete(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }
  function handleTaskAdding(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text:text,
        id: Math.random(),
        projectId:prevState.selectedProject,
      };

      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks],
      };
    });
  }

  let content = (
    <SelectedProjectDetails
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAdd={handleTaskAdding}
      onDeleto={handleTaskDelete}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProject === undefined) {
    content = (
      <NoProjectsSelected onStartAddProjectClicked={handleStartAddProjects} />
    );
  } else if (projectsState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handelCancelReset} />
    );
  }

  return (
    <main className="h-screen  mt-10 flex">
      <SideBar
        onStartAddProjectClicked={handleStartAddProjects}
        projects={projectsState.projects}
        handleProjectSelection={handleSelectProject}
        selectedProjectId={projectsState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
