import React, { useMemo, useState } from 'react'
import PostItem from './PostItem'
import { PostItemsType } from 'types/PostItem.types'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from 'gatsby'
import CategoryList from './CategoryList'

type PostItemsProps = {
  posts: PostItemsType[]
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const PostItems = ({
  posts,
  selectedCategory,
  categoryList,
}: PostItemsProps) => {
  const [postsLength, setPostsLength] = useState(10)
  const filteredPosts = useMemo(
    () =>
      posts
        .filter(
          ({
            node: {
              frontmatter: { categories },
            },
          }: PostItemsType) =>
            selectedCategory !== 'All'
              ? categories.includes(selectedCategory)
              : true,
        )
        .splice(0, postsLength),
    [selectedCategory, postsLength],
  )

  return (
    <div className="grow py-28 h-screen overflow-y-scroll">
      <section className="max-w-2xl mx-auto space-y-8">
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
        />
        {filteredPosts.map(
          ({
            node: {
              id,
              frontmatter,
              fields: { slug },
            },
          }: PostItemsType) => (
            <Link key={id} to={slug}>
              <PostItem {...frontmatter} />
            </Link>
          ),
        )}
        <div
          onClick={() => setPostsLength(prev => prev + 10)}
          className="flex justify-center items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer"
        >
          <AiOutlineArrowDown className="w-7 h-7" />
        </div>
      </section>
    </div>
  )
}

export default PostItems
