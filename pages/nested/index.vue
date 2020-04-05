<template>
        <div class="">
          <images :posts='getPosts' />
          <br>
        </div>

</template>

<script>
import images from '@/components/images'
import {mapGetters} from 'vuex'
export default {
    components: {images},
  async asyncData(context) {

  } ,
  computed: {
    ...mapGetters({getPosts: 'store/getPosts'})
  }
}
</script>
