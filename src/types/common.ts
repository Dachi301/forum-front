export interface QuestionType {
    id: number
    title: string
    question: string
    image: string
    user_id: number
    created_at: string
    updated_at: string
    user: User
    comments: QuestionComment[]
    likes: QuestionLike[]
    tags: Tags[]
}

export interface User {
    id: number
    username: string
    email: string
    created_at: string
    updated_at: string
}

export interface QuestionComment {
    id: number
    body: string
    created_at: string
    updated_at: string
    user_id: number
    question_id: number
    replies: any[]
}

export interface QuestionLike {
    id: number
    created_at: string
    updated_at: string
    user_id: number
    question_id: number
    user: User
}

export interface Tags {
    id: number
    name: string
    created_at: any
    updated_at: any
    pivot: any
}

// export interface PivotTags {
//     question_id: number
//     tag_id: number
// }