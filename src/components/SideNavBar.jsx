import { AiOutlineHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useData } from "../context/dataContext";
import AvatarEle from "./AvatarEle";
import { Link } from "react-router-dom";

export default function SideNavBar() {
  const {
    dataState: { user },
  } = useData();

  return (
    <aside>
      <div className="flex fixed top-[52px] left-0 bottom-0 flex-col pt-4 gap-6 px-2 border-r border-r-gray-300 w-[13rem]">
        <Link to={"/"}>
          <div className="flex gap-1 items-center font-bold cursor-pointer">
            <AiOutlineHome />
            <p>Home</p>
          </div>
        </Link>

        <div className="flex gap-1 items-center cursor-pointer">
          <MdExplore />
          <p>Explore</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <BsFillBookmarkFill />
          <p>Bookmarks</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <FaUserCircle />
          <p>Profile</p>
        </div>
        <div className="flex gap-1 items-center mt-auto mb-4 cursor-pointer bg-violet-200 p-2 rounded-lg">
          <div className="flex text-[1rem] leading-[18px] text-black">
            <AvatarEle imgLink={user?.picURL} name={user?.name} />

            <div className="flex-col justify-center gap-1 font-normal md:flex">
              {user.name}
              <span className="text-[small]">{`@${user?.username}`}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
