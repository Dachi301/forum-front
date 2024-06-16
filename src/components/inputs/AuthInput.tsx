import React, { HTMLInputTypeAttribute } from 'react';

import { Controller } from "react-hook-form";

interface PropsTypes {
    name: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
    control: any;
    defaultValue?: string;
    errorResponse?: string | undefined
}

const AuthInput: React.FC<PropsTypes> = ({
                                             type = 'text',
                                             name,
                                             label,
                                             control,
                                             defaultValue = '',
                                             errorResponse,
                                             ...props
                                         }) => {
    return (
        <div>
            <div className="relative">
                <Controller
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({field}) => (
                        <input
                            {...field}
                            {...props}
                            type={type}
                            id={name}
                            aria-describedby={`${name}_help`}
                            className="block h-[42px] rounded px-2.5 pb-2 pt-5 w-full text-sm bg-white border border-[#EAEAEA] appearance-none focus:outline-none focus:ring-0 peer placeholder-transparent"
                            placeholder=""
                            autoComplete="off"
                        />
                    )}
                />
                <label
                    htmlFor={name}
                    className="absolute text-[12px] font-light text-black duration-300 transform -translate-y-2.5 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                    {label}
                </label>
            </div>
            <div className={'pt-2 pl-1 text-xs text-red-600'}>{errorResponse}</div>
        </div>
    );
}

export default AuthInput;
