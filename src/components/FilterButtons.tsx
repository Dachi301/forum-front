import React, {useState} from 'react';
import Button from "@/components/buttons/Button";
import ClockIcon from "@/assets/icons/ClockIcon";
import TopArrowIcon from "@/assets/icons/TopArrowIcon";
import ClosedQuestionIcon from "@/assets/icons/ClosedQuestionIcon";

const FilterButtons: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('New');
    const activeClassName = 'bg-[#1682FD] text-white';
    const defaultClassName = 'bg-[#EAEAEA] text-[#808080]';

    const buttons = [
        {name: 'New', icon: <ClockIcon/>},
        {name: 'Top', icon: <TopArrowIcon/>},
        {name: 'Hot', icon: <ClosedQuestionIcon/>}
    ];

    return (
        <div className="flex items-center gap-4 mb-9">
            {buttons.map((button) => (
                <Button
                    key={button.name}
                    className={`flex items-center gap-[5px] px-[10px] py-1 text-[13px] rounded-3xl transition-colors duration-300 ${activeButton === button.name ? activeClassName : defaultClassName}`}
                    icon={button.icon}
                    text={button.name}
                    onClick={() => setActiveButton(button.name)}
                />
            ))}
        </div>
    );
}

export default FilterButtons;
