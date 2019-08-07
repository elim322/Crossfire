import React from "react"
import ProductionListItem from "./ProductionList/"
import blog from "../../assets/blog/english/posts.json"
import blog_de from "../../assets/blog/german/posts.json"
import { TranslationContext } from "../context/TranslationContext"

const Production = () => (
  <>
    <div className="production-title">
      <h1 className="production-title-box">From the Director</h1>
    </div>
    <TranslationContext.Consumer>
      {({ en }) => {
        return en === true
          ? blog.posts.map(post => {
              return <ProductionListItem key={post.num} post={post} />
            })
          : blog_de.posts.map(post => {
              return <ProductionListItem key={post.num} post={post} />
            })
      }}
    </TranslationContext.Consumer>
  </>
)

export default Production
