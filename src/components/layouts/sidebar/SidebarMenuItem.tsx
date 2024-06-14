import {JSX} from "react";
import {Link} from "react-router-dom";

interface PropsTypes {
    menuItem: string
    icon: JSX.Element
}

function SidebarMenuItem({menuItem, icon}: PropsTypes) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'bg-[#FCF4EC] border-l-[5px] border-l-[#F48023] -mx-12 px-9'}>
                <Link
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg group"
                >
                    {icon}
                    <span className="ms-3 text-[#F48023] text-sm">{menuItem}</span>
                </Link>
            </div>
        </div>
    );
}

export default SidebarMenuItem;