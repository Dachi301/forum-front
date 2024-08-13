import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/Table";

const column = [
  { heading: "User Name", value: "name" },
  { heading: "Questions Uploaded", value: "questions" },
  { heading: "Likes", value: "likes" },
  { heading: "User Joined", value: "joined" },
];

const data = [
  { name: "John Doe", questions: 2, likes: 1, joined: "2024/03/12" },
  { name: "John Smith", questions: 4, likes: 2, joined: "2024/03/12" },
  { name: "James Smith", questions: 6, likes: 3, joined: "2024/04/01" },
  { name: "Larry Page", questions: 8, likes: 4, joined: "2024/04/15" },
  { name: "Jordan Belfort", questions: 10, likes: 5, joined: "2024/04/15" },
];

function UsersRanking() {
  return (
    <MainLayout>
      <h1 className="text-2xl text-[#f48023] text-center mb-5">
        Users Ranking (Activity)
      </h1>
      <Table data={data} column={column} />
    </MainLayout>
  );
}

export default UsersRanking;
