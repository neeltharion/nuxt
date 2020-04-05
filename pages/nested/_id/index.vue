<template>
      <div class="text-primary">
            <div class="form-group">
              <label for="">ID</label>
              <input type="text"
                class="form-control" v-model="post.id">
            </div>
             <div class="form-group">
              <label for="">firstName</label>
              <input type="text"
                class="form-control"  v-model="post.first_name">
            </div>
             <div class="form-group">
              <label for="">lastName</label>
              <input type="text"
                class="form-control"  v-model="post.last_name">
            </div>
             <div class="form-group">
              <label for="">Email</label>
              <input type="text"
                class="form-control"  v-model="post.email">
            </div>
             <div class="form-group">
              <label for="">Avatar</label>
              <input type="text"
                class="form-control"  v-model="post.avatar">
            </div>
             <div class="form-group">
              <label for="">Index</label>
              <input type="text"
                class="form-control"  v-model="post.index">
            </div>
            <br>
            <button class="btn btn-primary" @click="editPost">Edit</button>
      </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
      return{
          post : {}
      }
    } ,
    methods: {
          editPost() {
            this.$store.dispatch('store/editPost' , this.post).then(()=> {
              this.$router.push('/nested')
            })
          }
    }
    , created() {

        let x =       this.$store.state.store.posts[this.$route.params.id]
        this.post = Object.assign({},x)

    }
}
</script>

<style>

</style>
