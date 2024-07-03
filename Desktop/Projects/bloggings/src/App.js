import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateBlog from './CreateBlog'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
function App() {
  const title = 'Welcome to the New Blog'
  const likes = 50
  return (
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
  )
}

export default App
