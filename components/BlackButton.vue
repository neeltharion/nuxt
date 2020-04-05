<template >
          <button slot @click="$emit('clicked')">   <slot></slot> </button>
</template>

<style scoped>

            button {
              background: #000;
              color: aqua;
              border-radius: 5px;
            }
</style>
