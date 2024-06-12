import img from "../assets/no-projects.png";
import CustomeButton from "./CustomeButton";

export default function NoProjectsSelected({ onStartAddProjectClicked }) {
  return (
    <div className=" text-center mx-auto w-[70rem] ml-8 mt-20">
      <img
        src={img}
        alt="No Projects Selected"
        className=" w-14 h-14 mx-auto mb-5"
      />
      <h2 className=" font-bold text-xl">No Project Selected</h2>
      <p className=" text-stone-600 font-medium my-4">
        Select a project or get started with a new one
      </p>
      <CustomeButton onClick={onStartAddProjectClicked}>
        Create new project
      </CustomeButton>
    </div>
  );
}
