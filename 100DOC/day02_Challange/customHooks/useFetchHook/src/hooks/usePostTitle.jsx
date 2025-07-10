import { useState ,useEffect } from "react"

export function usePostTitle() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await response.json();
      setPost(json);
    }
    getPost();
  }, []);

  return post;  // return full post
}

