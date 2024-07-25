import { ReactNode, useEffect, useState } from "react"
import { get } from "./util/http"
import { BlogPost } from "./components/blog-post.tsx"
import fetchingImg from "./assets/data-fetching.png"
import BlogPosts from "./components/BlogPosts"
import ErrorMessage from "./components/ErrorMessage"

type RawDataBlogPost = {
  id: number
  userId: number
  title: string
  body: string
}

function App() {
  const [fetchPosts, setFetchedPosts] = useState<BlogPost[]>()
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string>(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[]
        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return { id: rawPost.id, title: rawPost.title, text: rawPost.body }
        })
        setFetchedPosts(blogPosts)
      } catch (error) {
        //setError("Failed to fetch posts")
        if (error instanceof Error) {
          setError(error.message)
        }
      }

      setIsFetching(false)
    }
    fetchPosts()
  }, [])

  let content: ReactNode

  if (error) {
    content = <ErrorMessage text={error} />
  }

  if (fetchPosts) {
    content = <BlogPosts posts={fetchPosts} />
  }
  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }
  return (
    <main>
      <img src={fetchingImg} alt="An abstract image" />
      {content}
    </main>
  )
}

export default App
