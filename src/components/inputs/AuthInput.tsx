import React, {HTMLInputTypeAttribute, ChangeEvent} from 'react'

interface PropsTypes {
    name: string
    type?: HTMLInputTypeAttribute
    label?: string
    value?: string | number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput: React.FC<PropsTypes> = ({
                                             type = 'text',
                                             name,
                                             label,
                                             value,
                                             onChange,
                                         }) => {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={name}
                aria-describedby={`${name}_help`}
                className="block h-[42px] rounded px-2.5 pb-2 pt-5 w-full text-sm bg-white border border-[#EAEAEA] appearance-none  focus:outline-none focus:ring-0 peer placeholder-transparent"
                placeholder=""
                required
                autoComplete={'off'}
            />
            <label
                htmlFor={name}
                className="absolute text-[12px] font-light text-black duration-300 transform -translate-y-2.5 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
                {label}
            </label>
        </div>
    )
}

export default AuthInput
