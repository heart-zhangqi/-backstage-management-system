<template>
  <el-table
    :data= " data "
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.slogan }}</span>
          </el-form-item>
          <el-form-item label="详细地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="营业时间">
            <span>{{ props.row.startTime }}am</span>-<span>{{ props.row.endTime }}pm</span>
          </el-form-item>
          <el-form-item label="店铺分类">
            <span>{{ props.row.region }}</span>
          </el-form-item>
          <el-form-item label="店铺特点">
            <FeatureItem :text = "props.row.feature"></FeatureItem>
          </el-form-item>
          <el-form-item label="店铺logo">
           <img id="img" :src="`http://localhost:3000/upload/${props.row.logoUrl}`" alt="">
          </el-form-item>
           <el-form-item label="营业许可证">
           <img id="img" :src="`http://localhost:3000/upload/${props.row.manageUrl}`" alt="">
          </el-form-item>
          <el-form-item label="餐饮许可证">
           <img id="img" :src="`http://localhost:3000/upload/${props.row.diningUrl}`" alt="">
          </el-form-item>
        </el-form>
        
      </template>
    </el-table-column>
    <el-table-column
      label="社会统一信用码"
      prop="id">
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺简介"
      prop="info">
    </el-table-column>
      <el-table-column align="right"  label="操作">
        <template slot-scope="scope">
         <el-button type="primary" @click = "edit( scope.row )" plain>编辑</el-button>
          <el-button type="danger" @click = "del(scope.row._id)" plain>删除</el-button>
        </template>
      </el-table-column>
      
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #img{
    width:100px
  }
</style>

<script>
  import { mapActions,mapState } from 'vuex'
  import FeatureItem from './FeatureItem'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    computed:{
      ...mapState({
        data: state => state.shop.data
      })
    },
    components: {
      FeatureItem
    },
    methods:{
      ...mapActions(['query','del']),
      edit( item ){
          this.$router.push({
            name:'edit',
            query:item
          })
      }
    },
    mounted(){
      this.query()
    }
  }
</script>