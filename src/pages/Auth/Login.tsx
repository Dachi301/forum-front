// Validation Libs
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthForm from "@/components/layouts/AuthForm.tsx";
import AuthInput from "@/components/inputs/AuthInput.tsx";
import Button from "@/components/buttons/Button.tsx";
import {LogInInputTypes} from "@/types";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
})

function Login() {
    const { handleSubmit, control, formState: {errors} } = useForm<LogInInputTypes>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<LogInInputTypes> = (data) => {
        console.log(data);
    };
    return (
        <MainLayout>
            <div className={'flex h-screen'}>
                <AuthForm
                    title={'We’ve missed you!'}
                    body={'More than 150 questions are waiting for your wise suggestions!'}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <AuthInput control={control} name="email" label="Email" errorResponse={errors.email?.message} />
                    <AuthInput control={control} type="password" name="password" label="Password" errorResponse={errors.password?.message} />
                    <Button
                        type={'submit'}
                        className={'w-full py-3 bg-[#F48023] rounded font-black uppercase text-white text-center text-xs'}
                        text={'Login'}
                        onClick={() => {}} />
                </AuthForm>
                <div className={'basis-[60%]'}>
                    <img className={'w-full h-screen'} src={'/images/login-img.jpg'} alt={'Login Image'} />
                </div>
            </div>
        </MainLayout>
    );
}

export default Login;