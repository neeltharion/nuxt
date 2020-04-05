<template>
       <div class="">
              <div class="row" >
                    <div class="col-4 col-md-3" v-for="(post,i) in posts" :key="i">

                                              <theImage :id='i' :title="post.email" :image='post.avatar' :text="post.first_name + ' ' + post.last_name " > </theImage>

                    </div>
            </div>
       </div>
</template>

<script>
import theImage from '@/components/theImage'
export default {
    components: {theImage},
    props:['posts'] ,
    created(){
      console.log(this.posts);

    }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
