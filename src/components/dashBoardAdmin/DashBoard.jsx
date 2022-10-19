import { useState } from "react";
import Users from "./Users";
import ChartUsers from "./ChartUsers";
import ChartPayments from "./ChartPayments";
import RecentsUsers from "./RecentsUsers";

function DashBoard() {
  const [state, setState] = useState("dashboard");
  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <div className="sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
      <div className="flex flex-col-2 gap-6 mb-6">
        <button
          className="tracking-wider text-lg hover:border-b-2 border-slate-300"
          value="dashboard"
          onClick={(e) => handleChange(e)}
        >
          DashBoard
        </button>
        <button
          className="tracking-wider text-lg   hover:border-b-2 border-slate-300"
          value="users"
          onClick={(e) => handleChange(e)}
        >
          Users
        </button>
      </div>
      <div>
        {state === "dashboard" && (
          <div>
            <ChartUsers />
            <ChartPayments />
            <RecentsUsers />
          </div>
        )}
        {state === "users" && <Users />}
      </div>
    </div>
  );
}

export default DashBoard;
