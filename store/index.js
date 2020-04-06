export const state = () => ({

})

export const getters = {

}


export const actions = {

  async nuxtServerInit({commit}, context) {




    const s = context.store.state.store.posts
    if (s.length > 0) {
      return null
    } else {
      var posts = []
      const p = await context.$axios.get('https://reqres.in/api/users?page=1&per_page=12').then(d => {
        let x = d.data.data.map((data, i) => {
          let newData = {
            ...data,
            index: i
          }
          return newData
        })


        context.store.dispatch('store/getPosts', x)
        posts = x
      }).catch(e => console.log(e))

      return {
        posts,
        welcome: 'Welcome to NuxtJS'
      }
    }
  },

}

export const mutattions = {

}
