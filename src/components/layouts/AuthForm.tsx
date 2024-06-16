import React from 'react'

interface PropsTypes {
  title: string
  body: string
  children: React.ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

function AuthForm({ title, body, children, onSubmit }: PropsTypes) {
  return (
    <form
        onSubmit={onSubmit}
      className={
        'flex flex-col gap-5 items-start justify-center px-[100px] basis-[40%] bg-[#FAFAFA]'
      }
    >
      <h1 className={'text-2xl font-black'}>{title}</h1>
      <p className={'text-xl font-light leading-7'}>{body}</p>
      <div className={'w-full flex flex-col gap-4'}>{children}</div>
    </form>
  )
}

export default AuthForm
