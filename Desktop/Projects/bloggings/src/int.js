import { useState, useEffect } from 'react'

const { data, isPending, error } = useFetch('http://localhost:8001/blogs')


<BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/create" Component={CreateBlog} />
            <Route path="/blogs/:id" Component={BlogDetails} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
</BrowserRouter>

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortController = new AbortController()
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setError(null)
          setIsPending(false)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted')
          } else {
            setIsPending(false)
            setData(null)
            setError(err.message)
          }
        })
    }, 1000)
    return () => abortController.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
