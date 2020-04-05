<template>
          <div class="p-3 " >
                    <div class="card bg-dark text-white">
                      <img class="card-img-top" :src="image" alt="">
                      <div class="card-body">
                        <h4 class="h5 ">{{title | toUpper}}</h4>

                        <p class="card-text">{{text}}</p>
                        <button v-if="$store.state.store.isAuth" class="btn btn-success" @click="$router.push('/nested/' + id)">Edit</button>
                      </div>
                    </div>
          </div>
</template>

<script>
export default {
    props: {
      image: {type: String, required: true},
      title: {type: String, required: true},
      text: {type: String, required: true},
      id: {required:true}
    }
}
</script>

<style>


</style>
