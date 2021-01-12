<template>
  <div>
    <h2>list page</h2>
    <div class="listBox">
       <div class="listItem" v-for="(item,index) in listInfoData" :key="index">
           {{item[0]}}
       </div>
       <p>========title========</p>
      <div class="btn" @click="getSomeData">get data</div>
      <div class="listItem" v-for="(item,index) in listData" :key="index+'ff'">
        {{item[0]}}
      </div>
    </div>
    <button @click="toOtherPage">to news page</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      name:"test",
      listData: [],
    }
  },
   async asyncData(ctx) {
      const res = await axios.get("/apis/sug?code=utf-8&q=%E8%A3%A4%E5%AD%90");
      // console.log(res.data.result)
      return {listInfoData: res.data.result}
   },

   methods:{
     async getSomeData(){
       const res = await this.$axios.get("/apis/sug?code=utf-8&q=maoyi");
       this.listData = res.data.result

     },
     toOtherPage(){
       this.$router.push({
         name: "news-id",
         params:{
           id: 12345,
           name: "xiaoming",
         }
       })
     },
   }
}
</script>

<style scoped>
  .listBox{
    width: 100%;
    background: yellowgreen;
    font-size: 12px;
    height: 100vh;
    overflow-y: scroll;
  }
  .listItem{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: aliceblue;
    border-radius: 20px;
    border-bottom: 1px solid #000;
  }
  .btn{
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    background: deeppink;
  }
</style>
