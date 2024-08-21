import React from "react";
import MainLayout from "@/components/layouts/MainLayout.tsx";
import Select from "react-select";
import Button from "@/components/buttons/Button.tsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import createAxiosInstance from "@/axios/axios-instance.ts";
import useFetch from "@/hooks/useFetch.ts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

const schema = yup.object().shape({
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
      }),
    )
    .min(1, "Please select at least one tag")
    .required("Tags are required"),
  title: yup
    .string()
    .required("Title is required")
    .min(10, "Title must be at least 10 characters"),
  question: yup
    .string()
    .required("Question is required")
    .min(10, "Question must be at least 20 characters"),
});

type FormInputs = {
  tags: { label: string; value: string }[];
  title: string;
  question: string;
  image?: FileList;
};

function AskQuestionPage() {
  const { data, loading, error } = useFetch<any>("/tags");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [cookies, , removeCookie] = useCookies(["user"]);

  const tagOptions =
    data?.map((tag: any) => ({
      value: tag.id.toString(),
      label: tag.name,
    })) || [];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const axiosInstance = createAxiosInstance(cookies.user?.token);

  const onSubmit: SubmitHandler<FormInputs> = (formData: FormInputs) => {
    const payload = {
      title: formData.title,
      question: formData.question,
      image: formData.image,
      tags: formData.tags.map((tag) => tag.value),
      user_id: user.id,
    };

    const formDataToSend = new FormData();
    formDataToSend.append("title", payload.title);
    formDataToSend.append("question", payload.question);
    formDataToSend.append("user_id", payload.user_id);

    if (payload.image && payload.image.length > 0) {
      formDataToSend.append("image", payload.image[0]);
    }

    payload.tags.forEach((tag) => {
      formDataToSend.append("tags[]", tag);
    });

    axiosInstance
      .post("/upload", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainLayout>
      <div className={"w-[95%] bg-white py-7 px-10 shadow-default"}>
        <form
          className={"flex flex-col gap-5"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={"text-[#f48023] text-center text-2xl"}>
            Ask a Question
          </div>
          <div>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti={true}
                  options={tagOptions}
                  className="basic-multi-select text-sm pb-2"
                  classNamePrefix="select"
                  isClearable={false}
                />
              )}
            />
            {errors.tags && (
              <p className="text-red-500 text-sm">{errors.tags.message}</p>
            )}
          </div>
          <div>
            <input
              placeholder={"Type catching attention title"}
              type={"text"}
              {...register("title")}
              className={
                "w-full outline-0 bg-white rounded border-[2px] border-[#EAEAEA] p-3 text-sm"
              }
            />
            {errors.title && (
              <p className="text-red-500 text-sm pt-2">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              placeholder={"Type your question"}
              {...register("question")}
              className={
                "w-full outline-0 p-3 border-[2px] border-[#EAEAEA] rounded text-sm"
              }
              rows={6}
              cols={50}
            ></textarea>
            {errors.question && (
              <p className="text-red-500 text-sm">{errors.question.message}</p>
            )}
          </div>
          <div className={"flex justify-between items-center"}>
            <div>
              <input
                id={"fileUpload"}
                accept="image/png, image/jpeg"
                type={"file"}
                {...register("image")}
              />
            </div>
            <div>
              <Button type="submit" text={"Publish"} onClick={() => {}} />
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default AskQuestionPage;
