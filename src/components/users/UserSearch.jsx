import React, { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
function UserSearch() {
  const [text, setText] = useState("");
  const { users, fetchGit, deleteState } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("You need make a query", "error");
    } else {
      //to doo
      fetchGit(text);
      setText("");
    }
  };
  const handleClick = () => {
    deleteState();
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search.."
              value={text}
              onChange={handleChange}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              type="submit"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClick} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
