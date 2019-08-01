import React from "react"
import ProductionListItem from "./ProductionList/"
import blog from "../../assets/blog/english/posts.json"

const Production = () => (
  <>
    <div className="production-title">
      <h1 className="production-title-box">From the Director</h1>
    </div>
    {blog.posts.map(post => {
      return <ProductionListItem key={post.num} post={post} />
    })}
  </>
)

export default Production
