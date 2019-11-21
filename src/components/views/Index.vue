<template>

<div>
  <!-- 顶1-->
  <el-row>
    <el-col :span="24">
      <div class="top1">
          <span style="margin-left:7%;">让旅行更幸福</span>
          <span style="margin-left:40%;">
            <router-link to="#" style="text-decoration-line: none;color:#0066CC;">您好,请登录</router-link>
            <router-link to="#" style="text-decoration-line: none;margin-left:1%;color:#666;">免费注册</router-link>
            <i class="el-icon-chat-dot-round" style="margin-left:2%"></i>消息
          </span>
      </div>
    </el-col>
  </el-row>
   <!-- 顶2  搜索框-->
  <el-row>
    <el-col :span="24">
      <div class="top2">
      <span style="font-family: '华文行楷';color:#2577E3;font-size:30px; padding-left:7%;">网上酒店预订</span>
      <!-- 搜索框-->

      <div id="ss">
       <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default" @click="details">Right</button>
    </div>
      </div>

      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  methods: {
    details: function () {
      this.$router.push("/details")
    }
  }
}
$(function(){
  alert("123");
});
</script>
<style scoped>
#ss{
  background-color: #A4CBFF;
  width: 35%;
  height: 7vh;
  margin-left: 23%;
}
.top1{

background-color: #F4F4F4;
height: 6vh;
line-height: 6vh;
width: 100%;
color: #666;
font-size: 12px;

}
.top2{
  width: 100%;
  height: 20vh;
  line-height: 20vh;

}

</style>
