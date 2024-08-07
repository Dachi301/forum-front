import { useNavigate } from "react-router-dom";

// Validation Libs
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Types
import { SignUpInputTypes } from "@/types";

// UI Components
import MainLayout from "@/components/layouts/MainLayout.tsx";
import AuthForm from "@/components/layouts/AuthForm.tsx";
import Button from "@/components/buttons/Button.tsx";
import AuthInput from "@/components/inputs/AuthInput.tsx";

// Axios Instance
import createAxiosInstance from "@/axios/axios-instance.ts";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .test(
      "no-spaces",
      "Username must not contain spaces",
      (value) => !/\s/.test(value as string),
    )
    .required("Username is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters"),
  password_confirmation: yup
    .string()
    .required("Confirm Password is required")
    .min(6, "Password length should be at least 6 characters")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

function Register() {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpInputTypes>({
    resolver: yupResolver(schema),
  });
  const axiosInstance = createAxiosInstance();
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState<string>("");

  const onSubmit: SubmitHandler<SignUpInputTypes> = (data) => {
    axiosInstance
      .post("/auth/signup", {
        ...data,
      })
      .then(function () {
        reset();
        navigate("/auth/login");
      })
      .catch(function (error) {
        if (error.response && error.response.status === 500) {
          setResponseStatus(
            "Username is already taken. Please choose another one.",
          );
        } else {
          setResponseStatus("An unexpected error occurred. Please try again.");
        }
      });
  };

  return (
    <MainLayout>
      <div className="flex h-screen">
        <AuthForm
          title="Join Alem Community"
          body="Get more features and privileges by joining the most helpful community"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            control={control}
            name="username"
            label="Username"
            errorResponse={
              responseStatus.length > 0
                ? responseStatus
                : errors.username?.message
            }
          />
          <AuthInput
            control={control}
            name="email"
            label="Email"
            errorResponse={errors.email?.message}
          />
          <AuthInput
            control={control}
            name="password"
            label="Password"
            errorResponse={errors.password?.message}
            type="password"
          />
          <AuthInput
            control={control}
            name="password_confirmation"
            label="Confirm Password"
            errorResponse={errors.password_confirmation?.message}
            type="password"
          />
          <Button
            onClick={() => {}}
            type="submit"
            className="w-full py-3 bg-[#F48023] rounded uppercase font-black text-white text-center text-xs"
            text="Register"
          />
          {/*<h1 className={'text-green-500'}>User Created Successfully!</h1>*/}
        </AuthForm>
        <div className="basis-[60%]">
          <img
            className="w-full h-screen"
            src="/images/register-img.jpg"
            alt="Register Image"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
