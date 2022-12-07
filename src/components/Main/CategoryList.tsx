import { Link } from 'gatsby'
import React from 'react'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10 px-5">
      {Object.entries(categoryList).map(([name, count]) => (
        <Link
          key={name}
          to={`/?category=${name}`}
          className={
            selectedCategory == name
              ? 'category font-bold cursor-pointer'
              : 'category cursor-pointer'
          }
        >
          #{name}({count})
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
