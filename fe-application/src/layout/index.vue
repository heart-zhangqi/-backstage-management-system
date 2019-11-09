<template>
    <div style="height:100%">
      <el-container style=" border: 1px solid #eee;height:100%;">
        <el-aside width="200px" style="background-color: rgb(30,30,30)">
          <h2>后台管理系统</h2>
          <el-menu :default-openeds="['1', '3']"
            background-color=" rgb(30,30,30)"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <router-link to="/home"> 
               <div class="connn">
                  <i class="el-icon-message"></i>
                  首页
               </div>
               </router-link>
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
               <div class="connn">
                 <i class="el-icon-menu"></i>
                <a href="">数据管理</a>
               </div>
              </template>
              <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <router-link to="/user"  style = "color: white;">
                  用户列表
                </router-link>
              </el-menu-item>
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <router-link to="/shop" style = "color: white;">
                  商家列表
                </router-link>
              </el-menu-item>
               <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <router-link to="/food" style = "color: white;">
                  食品列表
                </router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <div class="connn">
                  <i class="el-icon-setting"></i>
                 <a href="">添加数据</a>
                </div>
                
              </template>
             
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <router-link to="/shop_add" style = "color: white;">
                  店铺添加
                </router-link>
              </el-menu-item>
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <router-link to="/food_add" style = "color: white;">
                  食品添加
                </router-link>
              </el-menu-item>
            </el-submenu>
             <el-submenu index="4">
              <template slot="title">
               <div class="connn">
                  <i class="el-icon-star-on"></i>
                  <a href="">图表</a>
               </div>
              </template>
               
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <a href="" style = "color: white;">
                  图表
                </a>
              </el-menu-item>
            </el-submenu>
              <el-submenu index="5">
              <template slot="title">
               <div class="connn">
                  <i class="el-icon-edit"></i>
                  <a href="">编辑</a>
               </div>
              </template>
               
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <a href="" style = "color: white;">
                 富文本编辑
                </a>
              </el-menu-item>
            </el-submenu>
              <el-submenu index="6">
              <template slot="title">
               <div class="connn">
                  <i class="el-icon-setting"></i>
                  <a href="">设置</a>
               </div>
              </template>
               
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <a href="" style = "color: white;">
                  用户设置
                </a>
              </el-menu-item>
            </el-submenu>
              <el-submenu index="7">
              <template slot="title">
               <div class="connn">
                  <i class="el-icon-warning"></i>
                  <a href="">说明</a>
               </div>
              </template>
             <el-menu-item index="2-3" style="background-color: rgb(40,50,50)">
                <a href="" style = "color: white;">
                  说明
                </a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        
        <el-container>
          <el-header style="text-align: right; font-size: 12px;background: rgb(30,30,30);color:#fff">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px;color:#fff"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
           <router-link to='/login'>登录</router-link>
          </el-header>
          
          <el-main>
            <!-- my_demo -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  h2{
    height: 60px;
    text-align: center;
    font-size: 12px;
    line-height:60px!important;
    background-color: rgb(30,30,30)!important;
    color: #fff
  }
  a{
    color:#fff!important;
    text-decoration: underline;
  }
  .connn{
    text-align:left!important;
  }
  /* .el-menu{
    background: red!important
  } */
  .el-submenu .el-submenu__title:hover{
    background: red!important;
  }
    .el-menu-item{
    background:#1f2d3d!important;
    padding: 0!important;
    text-align: center
  }
    .el-submenu__title{
    display: flex;
    align-items: center;
  }
    .el-menu-item:hover{
      background:red!important;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9!important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF!important;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader-icon::before{
    line-height: 178px!important;
  }
</style>

<script>
  export default {
   
  };
</script>