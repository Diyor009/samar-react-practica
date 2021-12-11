import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

function PostForm({createPost}) {
    const [post, setPost] = useState({title: "", stack: ""})
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        // setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: "", stack: ""})
      }      
    return (
        <form>
        <h4> create your first post </h4>
        <MyInput
          type ="text" 
          className="form-control" 
          placeholder="programming language"
          value = {post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          type ="text" 
          className="form-control" 
          placeholder="enter  language"
          value = {post.stack}
          onChange={e => setPost({...post, stack: e.target.value})}
        />
          <MyButton onClick={addPost} className="btn btn w-100">
            add post
          </MyButton>            
      </form>
    )
}
export default PostForm

