 const state =() => ({
      hello: 'Hello World!',
      posts: [],
      isAuth: true
}
)

 const getters ={
  hellow : state => state.hello,
  getPosts: state =>{


         return state.posts
    } ,

      getPost: (state, data) => {
            return state.posts[data]
      }
}
const mutations = {
      setPosts(state, data) {
        state.posts = data
      },
      addNewData(state,data) {
        state.posts.push(data)
      } ,
      editPost(state, data) {
            const foundData = state.posts.find(found =>  found.id == data.id)
            for( let k in foundData) {
                  foundData[k] = data[k]
            }
      }
}
const actions = {



  getPosts: ({commit} , data) => {
        commit('setPosts' , data)

} ,   addNewData: ({commit} ,data) => {
  commit('addNewData' ,data)
},   editPost: ({commit} ,data) => {
  commit('editPost' ,data)
}
}

export default {
  getters,state,actions,mutations
}
