import { MdSpaceDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="py-5 px-0 pl-3 hidden w-54 shrink-0 flex-col  bg-opacity-50 p-6 pr-0 pt-5  lg:flex">
      <div className="mb-20 flex flex-col font-semibold text-xl items-center">
        <img
          className="w-20 h-20 mb-3 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <h2 className="text-xl font-extrabold">Hello {user.displayName}</h2>
      </div>
      <ul className="font-semibold px-0 flex flex-col gap-4 grow">
        <li>
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-3 text-xl active  bg-gray-400"
          >
            <MdSpaceDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-3 text-xl bg-gray-400"
          >
            <CiCirclePlus />
            Create
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-3 text-xl  bg-gray-400 "
          >
            <IoMdSettings /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
