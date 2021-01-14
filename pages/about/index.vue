<template>
  <v-content>
<!--     <v-btn color="#77d3d8" depressed loading width="200">anniu</v-btn>-->
     <div class="box">
       <v-layout>
         <v-flex xs6 class="box1">
            <div class="box3 ma-4"></div>
           <v-card class="mt-12" color="blue" width="50px" height="50px"></v-card>
         </v-flex>
         <v-flex xs4 class="box2">

         </v-flex>
       </v-layout>
     </div>
    <v-container>
      <v-flex>
        <div>
          <v-card
            class="mx-auto"
            height="100"
            max-width="200"
            outlined
          ></v-card>
          <v-card
            class="mt-n12 mx-auto"
            elevation="12"
            height="200"
            max-width="300"
          ></v-card>
        </div>
      </v-flex>
    </v-container>

  </v-content>
</template>

<script>

export default {
  // components: {
  //   TestButton
  // }
  name: "About",
  data: () => ({
    images: [
      'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    ]
  })
}
</script>

<style scoped>

  .box{
    height: 200px;
    background: aliceblue;
  }
  .box1{
    height: 200px;
    background: yellowgreen;
  }
  .box2{
    height: 200px;
    background: pink;
  }
  .box3{
    width: 50px;
    height: 50px;
    background: red;
  }
  .head{
    width: 3.75rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #35495e;
    color: #fff;
  }
</style>
