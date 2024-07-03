import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
  const allBlogs = blogs.map((blog) => {
    return (
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-author">Author: {blog.author}</p>
        </Link>
      </div>
    )
  })

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {allBlogs}
    </div>
  )
}

export default BlogList
