import React from "react";
import MainLayout from "@/components/layouts/MainLayout.tsx";
import FilterButtons from "@/components/FilterButtons.tsx";
import QuestionsList from "@/components/QuestionsList.tsx";
import CategoriesLayout from "@/components/layouts/CategoriesLayout.tsx";
import useFetch from "@/hooks/useFetch.ts";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const { data, loading, error } = useFetch<any>("/questions");
  const user = useSelector((state) => state.user);

  console.log({ user });

  // Check if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check for errors
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      <FilterButtons />
      <QuestionsList questions={data} />
      <CategoriesLayout />
    </MainLayout>
  );
};

export default Home;
