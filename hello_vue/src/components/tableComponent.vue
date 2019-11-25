<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="appname"
        label="APP名称"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="apkname"
        label="包名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        sortable
        label="类型">
      </el-table-column>
      <el-table-column
        prop="comp_name"
        sortable
        label="运营企业名称">
      </el-table-column>
      <el-table-column
        prop="type_number"
        label="版本号">
      </el-table-column>
      <el-table-column
        prop="update_date"
        sortable
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="download_num"
        sortable
        label="下载量（万）">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        :page-sizes="[5,10,20,40,80]"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                total:1000,//默认数据总数
                pageSize:5,//每页的数据条数
                currentPage:1,//默认开始页面
                tableData: [
                    {
                        appname: '1喵喵直播',
                        apkname: '1bdkdl',
                        type: '3视频直播',
                        comp_name: '1广大科技公司',
                        type_number: '1V1.2',
                        update_date: '12016-05-02',
                        download_num: '123.6'
                    },
                    {
                        appname: '2喵喵直播',
                        apkname: '2bdkdl',
                        type: '2视频直播',
                        comp_name: '2广大科技公司',
                        type_number: '2V1.2',
                        update_date: '22016-05-02',
                        download_num: '223.6'
                    },
                    {
                        appname: '3喵喵直播',
                        apkname: '1bdkdl',
                        type: '3视频直播',
                        comp_name: '3广大科技公司',
                        type_number: '3V1.2',
                        update_date: '32016-05-02',
                        download_num: '323.6'
                    },
                    {
                        appname: '4喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '5喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '6喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '7喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '8喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '9喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '10喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '11喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '12喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '13喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '14喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '15喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '16喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    },
                    {
                        appname: '17喵喵直播',
                        apkname: '4bdkdl',
                        type: '4视频直播',
                        comp_name: '4广大科技公司',
                        type_number: '4V1.2',
                        update_date: '42016-05-02',
                        download_num: '423.6'
                    }
                ]
            }
        },
        methods: {
            currentChange: function(curPage){
                this.currentPage = curPage;
            }
        },
        created: function(){
            this.total=this.tableData.length;
        }
    }
</script>
<style scoped>
  .el-pagination{
    margin-top:20px;
  }
</style>
