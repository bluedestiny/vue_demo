<template>
  <div>
    <h2>{{changeNum}}</h2>
    <div class="box" id="mychart">

    </div>
  </div>

</template>

<script>
  export default {
      methods: {
        drawLine: function () {
            var that = this;
           let mychart = this.$echarts.init(document.getElementById("mychart"))
            mychart.setOption( {
                xAxis: {
                    type: 'category',
                    data: this.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.series,
                    type: 'line'
                }]
            });

        }
      },
      mounted () {
         this.drawLine();
         var that = this;
          setInterval(function () {
              console.log(1);
              that.series.push(Math.ceil(Math.random()*1000));
              that.xData.push(700);
              that.drawLine();
          },1000)
      },
      computed:{
        changeNum:function(){
            return this.series[this.series.length-1];
        }
      },
      watch: {
          series:function(newVal,oldVal){
              this.drawLine();
          }
      },
      data: function () {
          return {
            series: [820, 932, 901, 934, 1290, 1330, 1320],
            xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
      }
  }
</script>

<style scoped>
.box{
  width: 500px;
  height: 300px;
  border: 1px solid blue;
}
</style>
