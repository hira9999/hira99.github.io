import React from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType

const PostItem = ({ title, date, categories, summary }: PostItemProps) => {
  return (
    <div>
      <div className="p-8 rounded-2xl hover:bg-[#161B22] hover:cursor-pointer">
        {/* title subtitle tag */}
        <div className="flex-col space-y-3">
          {/* title */}
          <span className="text-2xl font-semibold truncate">{title}</span>
          {/* subtitle */}
          <p className="opacity-80 text-sm truncate">{summary}</p>
          {/* tag  */}
          <div className="flex justify-between">
            <div className="space-x-3">
              {categories.map(category => (
                <span key={category} className="category">
                  #{category}
                </span>
              ))}
            </div>
            {/* date */}
            <span className="opacity-50">{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
