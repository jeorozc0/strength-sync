import { OptionsDropdown } from "./options-dropdown";

export function PageHeader() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#000000] w-screen z-10">
      <div className="flex flex-row bg-transparent w-full m-auto h-12 px-2">
        <div className="flex flex-row sm:flex-row h-full w-full justify-between items-center">
          <div className="flex items-center h-full">
            <h1 className="text-black dark:text-white text-3xl font-bold text-center sm:text-left">
              💪 StrengthSync
            </h1>
          </div>
          <div className="flex items-center">
            <OptionsDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
