import React from 'react'

type PostContentProps = {
  html: string
}

const PostContent = ({ html }: PostContentProps) => {
  return (
    <article
      className="prose prose-lead:text-white prose-headings:text-white"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default PostContent
