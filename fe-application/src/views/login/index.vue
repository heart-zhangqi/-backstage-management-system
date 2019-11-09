<template>
    <div class="bg">
        <div class="content">
            <h2>欢迎使用XX后台管理系统</h2>
            <div class="box">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item  prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item  prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item width="80%">
                        <el-button type="primary" @click="submitForm('ruleForm')" width="100%">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .bg 
        position fixed 
        z-index 1000000
        top 0
        bottom 0
        left 0
        right 0
        background rgb(30,30,30)
        width 100%
        height 100%
        
        .content
            width 330px
            height 300px
            margin auto
            margin-top 100px
            text-align center
         

        h2
            color #fff
            margin 10px 0
            font-size 24px
        .box
            width 310px
            height 240px
            border-radius 10px
background #fff
            padding 10px


            .el-form-item 
                width 90%
                margin 10px auto

.span
    display inline-block
    width 100%!important
button
    width 100%!important
</style>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>