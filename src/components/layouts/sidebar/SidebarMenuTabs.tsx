import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@/assets/icons/HomeIcon.tsx";
import UserIcon from "@/assets/icons/UserIcon.tsx";
import { ActiveItemsType } from "@/types";

function SidebarMenuTabs() {
  const location = useLocation();
  const [activeTabId, setActiveTabId] = useState<number>(0);

  const tabs: any[] = [
    { name: "Home", icon: HomeIcon, url: "/" },
    { name: "Ranking", icon: UserIcon, url: "/ranking" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = tabs.findIndex((tab) => tab.url === currentPath);
    setActiveTabId(activeIndex);
  }, [location, tabs]);

  const handleClick = (id: number) => setActiveTabId(id);

  return (
    <div className={"flex flex-col gap-1"}>
      {tabs.map((tab, id) => {
        const IconComponent = tab.icon;
        const isActive = id === activeTabId;

        return (
          <div
            onClick={() => handleClick(id)}
            key={tab.name}
            className={`-mx-12 px-9 ${isActive ? "bg-[#FCF4EC] border-l-[#F48023] border-l-[5px]" : "bg-transparent border-l-[5px] border-l-transparent"}`}
          >
            <Link
              to={tab.url}
              className="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <IconComponent stroke={isActive ? "#F48023" : "#808080"} />
              <span
                className={`ms-3 text-sm ${isActive ? "text-[#F48023]" : "text-[#000]"}`}
              >
                {tab.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarMenuTabs;
