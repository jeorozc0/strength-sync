import React from "react";
import { Link } from "react-router-dom";

export function ConfirmEmail() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col h-fit justify-center items-center my-14 gap-4 font-medium text-center">
        <h2 className="text-4xl">Email Confirmation Sent</h2>
        <Link to={"/login"} className={"font-md underline hover:underline text-md"}>
          Go back to Log in
        </Link>
      </div>
    </div>
  );
}
