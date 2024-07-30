import {useState} from "react";

// Validation Libs
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthForm from "@/components/layouts/AuthForm.tsx";
import AuthInput from "@/components/inputs/AuthInput.tsx";
import Button from "@/components/buttons/Button.tsx";
import {LogInInputTypes} from "@/types";
import createAxiosInstance from "@/axios/axios-instance.ts";
import {useNavigate} from "react-router-dom";

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
})

function Login({onLogin}: any) {
    const { handleSubmit, control, formState: {errors} } = useForm<LogInInputTypes>({
        resolver: yupResolver(schema)
    });
    const [errorMessage, setErrorMessage] = useState<string>('')
    const axiosInstance = createAxiosInstance()

    const onSubmit: SubmitHandler<LogInInputTypes> = (data) => {
        axiosInstance.post('/auth/login', {
            ...data
        }).then(function (response) {
            const { token } = response.data
            setErrorMessage('')
            onLogin({token})
            // Uketesi solutionia mosapiqrebeli
            window.location.href = '/'
        }).catch(function (error) {
            setErrorMessage(error.response.data)
        });
    };
    return (
        <MainLayout>
            <div className={'flex h-screen'}>
                <AuthForm
                    title={'We’ve missed you!'}
                    body={'More than 150 questions are waiting for your wise suggestions!'}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <AuthInput control={control} name="username" label="Username" errorResponse={errors.username?.message} />
                    <AuthInput control={control} type="password" name="password" label="Password" errorResponse={errors.password?.message} />
                    <Button
                        type={'submit'}
                        className={'w-full py-3 bg-[#F48023] rounded font-black uppercase text-white text-center text-xs'}
                        text={'Login'}
                        onClick={() => {}} />
                    {errorMessage && <h1 className={'text-red-500 text-sm'}>{errorMessage}</h1>}
                </AuthForm>
                <div className={'basis-[60%]'}>
                    <img className={'w-full h-screen'} src={'/images/login-img.jpg'} alt={'Login Image'} />
                </div>
            </div>
        </MainLayout>
    );
}

export default Login;