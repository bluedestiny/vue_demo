<template>
  <div class="my-carousel">
    <h2>轮播图</h2>
    <el-carousel height="250px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img v-bind:src="item.src">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data:function () {
        return {
              imagebox:[
                {   id:1,
                    src: '../../static/timg2.jpeg'
                },
                {   id:2,
                    src: '../../static/timg3.jpeg'
                },
                {   id:3,
                    src: '../../static/timg4.jpeg'
                },
                {   id:4,
                    src: '../../static/timg5.jpeg'
                }
            ]
        }
    }
  }
</script>

<style scoped>
  .my-carousel {
    margin: 0 auto;
    width: 600px;
  }
  .my-carousel img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
