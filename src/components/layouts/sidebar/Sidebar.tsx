import InputSearchIcon from "@/assets/icons/InputSearchIcon.tsx";
import QuestionsIcon from "@/assets/icons/QuestionsIcon.tsx";
import AnswersIcon from "@/assets/icons/AnswersIcon.tsx";
import LikesIcon from "@/assets/icons/LikesIcon.tsx";
import SidebarMenuTabs from "@/components/layouts/sidebar/SidebarMenuTabs.tsx";
import SidebarPersonalNavigatorItem from "@/components/layouts/sidebar/SidebarPersonalNavigatorItem.tsx";
import HomeIcon from "@/assets/icons/HomeIcon.tsx";
import { useSelector } from "react-redux";
import UserIcon from "@/assets/icons/UserIcon.tsx";

function Sidebar() {
  let userIsAuthenticated = false;
  const user = useSelector((state) => state.user);

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-20 left-0 z-40 w-[18%] h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-12 pb-4 overflow-y-auto bg-white flex flex-col gap-7">
          <div className={"relative"}>
            <input
              defaultValue={"Search"}
              type={"text"}
              className={"border-b w-full outline-0 pl-[30px] text-sm"}
            />
            <div className={"absolute top-0.5 left-0"}>
              <InputSearchIcon />
            </div>
          </div>
          <div className={"flex flex-col"}>
            <h1
              className={"text-xs font-bold text-[#808080] uppercase mb-[10px]"}
            >
              Menu
            </h1>
            <SidebarMenuTabs />
          </div>
          {Object.keys(user).length !== 0 && (
            <div className={"flex flex-col"}>
              <h1
                className={
                  "text-xs font-bold text-[#808080] uppercase mb-[10px]"
                }
              >
                Personal Navigator
              </h1>
              <div className={"flex flex-col gap-1"}>
                <SidebarPersonalNavigatorItem
                  menuItem={"My Questions"}
                  icon={<QuestionsIcon />}
                />
                <SidebarPersonalNavigatorItem
                  menuItem={"My Answers"}
                  icon={<AnswersIcon />}
                />
                <SidebarPersonalNavigatorItem
                  menuItem={"My Likes & Votes"}
                  icon={<LikesIcon />}
                />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
