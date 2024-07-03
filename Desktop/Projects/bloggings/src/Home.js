import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8001/blogs')
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All blogs" />}
    </div>
  )
}

export default Home
