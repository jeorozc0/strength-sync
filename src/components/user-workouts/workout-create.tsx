import { Link } from "react-router-dom";

const RoutineCreate = () => {
  return (
    <Link to={"/create-routine"} className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-max w-72 rounded-md p-6">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
      </div>
      <div className=" flex align-middle justify-center h-10 border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md cursor-pointer px-px py-1.5" >
        <p className="font-medium text-sm h-full align-middle">New Routine</p>
      </div>
    </Link>
  );
};

export default RoutineCreate;
