import Layout from 'components/Common/Layout'
import CommentWidget from 'components/Post/CommentWidget'
import PostContent from 'components/Post/PostContent'
import PostHeadInfo from 'components/Post/PostHeadInfo'
import { graphql } from 'gatsby'
import React from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

export type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: { href: string }
}

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: { title, date, categories, summary },
    },
  } = edges[0]

  return (
    <Layout title={title} description={summary} url={href}>
      <div className="grow py-28 h-screen overflow-y-scroll">
        <section className="w-[600px] mx-auto space-y-8">
          <PostHeadInfo
            title={title}
            date={date}
            categories={categories}
            summary={summary}
          />
          <PostContent html={html} />
          <CommentWidget />
        </section>
      </div>
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
