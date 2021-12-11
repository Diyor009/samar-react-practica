import axios from "axios";

class PostServiceApi {
   static async getAllPosts() {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      return responce.data
   }
}
export default PostServiceApi