import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthForm from "@/components/layouts/AuthForm.tsx";
import AuthInput from "@/components/inputs/AuthInput.tsx";
import Button from "@/components/buttons/Button.tsx";

function Login() {
    return (
        <MainLayout>
            <div className={'flex h-screen'}>
                <AuthForm
                    title={'We’ve missed you!'}
                    body={'More than 150 questions are waiting for your wise suggestions!'}
                >
                    <AuthInput label={'Username'} name={'username'} />
                    <AuthInput label={'Email'} name={'email'} />
                    <Button
                        className={'w-full py-3 bg-[#F48023] rounded font-black text-white text-center text-xs'}
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