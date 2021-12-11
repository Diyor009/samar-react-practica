import React, {useState} from "react";
import TableList from "./component/TableList";
import "../src/style/style.css"
import PostForm from './component/PostForm'
import FilterAndSearch from "./component/FilterAndSearch";
import MyModal from "./component/UI/modal/MyModal";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./hooks/useCreatePost";
import axios from "axios";
import { useEffect } from "react";
import PostServiceApi from "./API/postServiceApi";


function App() {
  const [posts, setPosts] = useState([ ])

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState( false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  async function fetchPosts() {
    setIsLoading(true)
    const posts = await PostServiceApi.getAllPosts()
    setPosts(posts)
    setIsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  return (
    <>
      <div className="app w-50 mx-auto">
        <MyButton 
          onClick={() => setModal(true)}
          className="btn btn-primary d-flex justify-content-start">
          Add Posts
        </MyButton>
        <MyModal modal={modal} setModal={setModal}>
          <PostForm createPost={createPost}/>
        </MyModal>        
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        
        {isLoading
        ? <p>Loading</p>
        : <TableList remove={removePost} posts={sortedAndSearchPosts} title="programming language"/>     }
      </
      div>
    </>
  );
}
export default App;

