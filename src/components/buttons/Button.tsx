import {JSX} from "react";
import {ButtonHTMLAttributes} from "react"


interface PropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: JSX.Element
    onClick: () => void
    className?: string
    disabled?: boolean
    variant?: 'primary' | 'secondary'
}

function Button({text, icon, onClick, className, disabled, variant = 'primary'}: PropsTypes) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className ? className : `text-xs py-3 px-5 ${variant === 'primary' && 'flex items-center gap-3 font-[900] text-white bg-[#F48023] rounded'} ${variant === 'secondary' && 'font-[900] text-[#1682FD] bg-[#EAEAEA] rounded'}`}`}
        >
            {icon && icon}
            {text}
        </button>
    );
}

export default Button