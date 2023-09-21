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
   {name: 'THAY Nimman',  price:500, img:"data:image/jpeg;base64,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", quantity: 0 ,
    text_box:'ร้านขวัญใจวัยรุ่นจากเอกมัย - ทองหล่อมาเปิดใจกลางนิมมานแล้วพร้อมโปรโมชั่นเอาใจชาวเชียงใหม่ 🍻'
    }])


</script>

<style>

.card-img-top{
  height: 100%;
  padding: 25px;
  border-radius: 60px;


}
.box_all{
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  text-align: center;
  border-radius: 60px;

}
.btn.btn-primary{
  background-color: rgba(0, 0, 0, 0.875);
}

</style>
