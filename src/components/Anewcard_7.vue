<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 25rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาโต๊ะ : {{n.price}}</p>
          <h6>***จำกัด 5 คนต่อ 1 โต๊ะ***</h6>

          <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> จองโต๊ะ </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';
const travelList=ref([
    {name:'ฉลุย Cafe',      price:675, img:"https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/326507696_712929163779100_2483379601231345097_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHlua916fh1wOqHKCqYaKMtxXE_MKs-tM3FcT8wqz60zcJMHGgwGzmamVUQwydj8EDJdPIhEDHR7YK9y_JdQqA1&_nc_ohc=KiYT5EJ36QwAX9bm-aa&_nc_oc=AQkgC1jtuDWFL8CKA2TWY4MXEpjir-4d8kMLSs2Nfw7ZYWTxmYBGvVBNSrygwFcZqZehbJSkDIDAHScwanlC4lRs&_nc_ht=scontent.fcnx2-1.fna&_nc_e2o=s&oh=00_AfA72lHWp6vmXmmklQEulsu-5zY18dtvq71k-1BLvKUFhQ&oe=6510FFC8", quantity: 0 ,
    text_box:' คำว่าเหล้า 🥃  พูดเบาๆก็คอแห้ง 😚ลูกค้าชุดสีดำ น่า…ทุกคน 💕 '
    },])


</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>
