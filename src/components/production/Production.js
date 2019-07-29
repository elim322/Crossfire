import React from "react"
import ProductionListItem from "./ProductionList/"
import blog from "../../assets/blog/english/posts.json"

const Production = () => (
  <>
    <h1>From the Director</h1>
    {blog.posts.map(post => {
      return <ProductionListItem key={post.num} post={post} />
    })}
  </>
)

export default Production
