import React from 'react'

type PostHeadInfoProps = {
  title: string
  summary: string
  date: string
  categories: string[]
}

const PostHeadInfo = ({
  title,
  summary,
  date,
  categories,
}: PostHeadInfoProps) => {
  return (
    <header className="flex flex-col p-4 rounded-t-2xl space-y-5 bg-[#161B22]">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{summary}</p>
      <div className="flex justify-between">
        <div className="space-x-3">
          {categories.map(category => (
            <span key={category} className="category">
              #{category}
            </span>
          ))}
        </div>
        <span>{date}</span>
      </div>
      <hr className="border-1 border-white border-solid" />
    </header>
  )
}

export default PostHeadInfo
