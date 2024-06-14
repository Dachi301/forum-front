import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthForm from "@/components/layouts/AuthForm.tsx";
import Button from "@/components/buttons/Button.tsx";
import AuthInput from "@/components/inputs/AuthInput.tsx";

function Register() {
    return (
        <MainLayout>
            <div className={"flex h-screen"}>
                <AuthForm
                    title="Join Alem Community"
                    body={
                        "Get more features and privileges by joining to the most helpful community"
                    }
                >
                    <AuthInput name="username" label="Username"/>
                    <AuthInput name="email" label="Email" type="email"/>
                    <AuthInput name="password" label="Password" type="password"/>
                    <AuthInput
                        name="repeat_password"
                        label="Repeat Password"
                        type="password"
                    />
                    <Button
                        className={
                            "w-full py-3 bg-[#F48023] rounded uppercase font-black text-white text-center text-xs"
                        }
                        text={"Register"}
                        onClick={() => {
                        }}
                    />
                </AuthForm>
                <div className={"basis-[60%]"}>
                    <img
                        className={"w-full h-screen"}
                        src={"/images/register-img.jpg"}
                        alt={"Register Image"}
                    />
                </div>
            </div>
        </MainLayout>
    );
}

export default Register;
