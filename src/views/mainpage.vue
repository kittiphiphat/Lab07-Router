<script setup>
import newcard from '../components/Newcard.vue'
import { ref } from 'vue';

const Box_news=ref([
   {name: 'สุรา ผลเสีย และวิธีการเลิกดื่ม', 
   img:"https://www.manarom.com/blog/img/alcohol.jpg",
    data_time:'7 กรกฎาคม 2566'
    }, 

    {name: 'โทษ พิษ ภัยของสุรา และผลกระทบต่อสุขภาพทั้งต่อตนเองและผู้ใกล้ชิด', 
    img:"https://multimedia.anamai.moph.go.th/oawoocha/2019/07/HP-eBook_13_Mini-1-724x1024.jpg",
    data_time:'15 กรกฎาคม 2562'
    },
  
    {name: 'โทษของสุราและเครื่องดื่มแอลกอฮอล์ต่อสุขภาพ', 
    img:"https://www.tidlor.com/tidlor/media/atc/consequences-drink-alcohol/cover-consequences-of-drinking-alcohol.webp",
    data_time:'3 มกราคม 2566'
    },


])
</script>

<template>
        <newcard></newcard>
        <div class="row g-5">
          <div class="col-md-8">
      
            <article class="blog-post">
              <h2 class="display-5 link-body-emphasis mb-1"> 5 เทคนิคลับสำหรับ สายดื่ม </h2>

              <hr>

              <li>รับประทานอาหารให้อิ่มก่อนดื่ม การทานอาหารก่อนดื่มจะช่วยให้ไม่เมาเร็ว ซึ่งอาหารที่แนะนำ ได้แก่ ขนมปัง ชีส เนื้อ หรือนม เป็นต้น ด้วยอาหารเหล่านี้มีโปรตีนสูงและจะถูกย่อยอย่างช้า ๆ เพื่อชะลอการดูดซึมแอลกอฮอล์ในร่างกายได้</li> <br>
              
              <li>ดื่มน้ำเปล่าบ่อย ๆ สลับกับการดื่มเครื่องดื่มแอลกอฮอล์ควบคู่กันไปด้วย เพราะน้ำเปล่าจะช่วยให้รู้สึกสดชื่นและป้องกันอาการแฮงค์</li><br>

              <li>รู้ลิมิตของตัวเอง การดื่มเครื่องดื่มแอลกอฮอล์ขีดจำกัดของแต่ละคนไม่เท่ากัน ฉะนั้นอย่าดื่มตามเพื่อน เราต้องรู้ลิมิตตัวเองว่าดื่มได้แค่ไหน อย่าปล่อยให้เกินลิมิต เช่น หากมีอาการเริ่มมึนหรือวิงเวียน ควรออกมาสูดอากาศข้างนอกสัก 10-15 นาที และดื่มน้ำเปล่าตามเพื่อเพิ่มความสดชื่น</li><br>
      
              <li>ไม่ควรดื่มเครื่องดื่มแอลกฮอล์หลายชนิดพร้อมกัน เพราะถ้าดื่มเหล้าบ้าง ไวน์บ้าง เบียร์บ้าง จะยิ่งทำให้ปวดหัวมากและเมาหนักได้</li><br>

              <li>วางแผนการเดินทางกลับบ้าน หากคิดว่าคืนนั้นคุณจะดื่มเครื่องดื่มแอลกอฮอล์ การขับรถไปเองไม่ควรอย่างยิ่ง เพราะถ้าหากเมาแล้วขับอาจจะเกิดอุบัติเหตุหรือโดนตำรวจจับได้ ควรเรียกรถแท็กซี่กลับจะดีกว่า</li><br>
            </article>
      
            <article class="blog-post">
              
            </article>
      
            <nav class="blog-pagination" aria-label="Pagination">
            </nav>
      
          </div>
      
      
      <!--Side bar-->
          <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
              <div class="p-4 mb-3 bg-body-tertiary rounded">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">เว็บไซต์ที่รวบรวมร้าน Hang on  ปาร์ตี้อย่างเฮฮา</p>
              </div>
      
              <div>
                <h4 class="fst-italic">Recent posts</h4>
                <ul class="list-unstyled">
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#" v-for="(i,index) in Box_news" :key="index">
                    <svg class="bd-placeholder-img"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <image :xlink:href="i.img" x="0" y="40" width="100px" />
                    </svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">{{i.name }}</h6>
                        <small class="text-body-secondary">{{i.data_time}}</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
      
      
      </div>
    
</template>


<style>
.blog-post{
  font-size: 20px;
  font-weight: 200;
}

</style>