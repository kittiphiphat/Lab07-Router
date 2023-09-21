<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'
import jumbo from './views/jumbo.vue'
</script>


<template>

  <div class="container">
  <boxheader> </boxheader>
  <jumbo text_title="ยินดีต้อนรับ bibimap" ex_box="สถานที่ท่องเที่ยวสำหรับสายดื่ม"></jumbo>
  <RouterView/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>