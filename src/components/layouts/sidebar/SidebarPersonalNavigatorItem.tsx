import {JSX} from "react";
import {Link} from "react-router-dom";

interface PropsTypes {
    menuItem: string
    icon: JSX.Element
}

function SidebarPersonalNavigatorItem({menuItem, icon}: PropsTypes) {
    return (
        <div className={'border-l-transparent border-l-[5px] -mx-12 px-9'}>
            <Link
                className="flex items-center p-2 text-gray-900 rounded-lg group"
                to={'/'}
            >
                {icon}
                <span className="ms-3 text-sm">{menuItem}</span>
            </Link>
        </div>
    );
}

// bg-[#FCF4EC]
// border-l-[#F48023]

export default SidebarPersonalNavigatorItem;