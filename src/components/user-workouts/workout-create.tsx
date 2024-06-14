import { Link } from "react-router-dom";

const RoutineCreate = () => {
  return (
    <Link
      to={"/create-routine"}
      className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-max w-11/12 lg:w-72 rounded-md p-6"
    >
      <div className=" flex align-middle justify-center  border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md cursor-pointer lg:p-3 p-5">
        <p className="font-medium text-sm text-center">New Routine</p>
      </div>
    </Link>
  );
};

export default RoutineCreate;
