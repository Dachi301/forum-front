import { ComponentType, ReactElement } from "react";

export interface QuestionType {
  id: number;
  title: string;
  question: string;
  image: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  user: UserInfoType;
  comments: QuestionComment[];
  likes: QuestionLike[];
  tags: Tags[];
}

export interface UserInfoType {
  id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface QuestionComment {
  id: number;
  body: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  question_id: number;
  replies: any[];
}

export interface QuestionLike {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  question_id: number;
  user: UserInfoType;
}

export interface Tags {
  id: number;
  name: string;
  created_at: any;
  updated_at: any;
  pivot: any;
}

// export interface PivotTags {
//     question_id: number
//     tag_id: number
// }

// Sign up and Sign in types

export interface SignUpInputTypes {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LogInInputTypes {
  username: string;
  password: string;
}

export interface IconType {
  stroke: string;
  className?: string;
}

export interface ActiveItemsType {
  name: string;
  icon: ComponentType<{ stroke: string; className?: string }> | ReactElement;
  url?: string;
}
