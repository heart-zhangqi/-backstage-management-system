<template>
    <div>
        <el-form 
          :model="ruleForm" 
          :rules="rules"
          ref="ruleForm"
          label-width="140px"
          class="demo-ruleForm upForm"
          enctype="multipart/form-data"
          >
           <el-form-item label="社会统一信用码" prop="id">
            <el-input v-model="$route.query.id" name = "id" disabled></el-input>
          </el-form-item>
          <el-form-item label="店铺名称" prop="name">
            <el-input v-model="ruleForm.name" name = "name"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input v-model="ruleForm.address" name = "address"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="tel">
            <el-input v-model="ruleForm.tel"  name = "tel"></el-input>
          </el-form-item>
          <el-form-item label="店铺简介" prop="info">
            <el-input v-model="ruleForm.info" name = "info"></el-input>
          </el-form-item>
          <el-form-item label="店铺标语" prop="slogan">
            <el-input v-model="ruleForm.slogan" name = "slogan"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类" prop="region" >
            <el-cascader
                v-model="value"
                :options="options"
                name = "region"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="店铺特点" prop = "feature">
              <ul class="feature" 
                     name = "feature"
              >
                  <li 
                    v-for=" item in feature "
                    :key = " item.id "
                  >
                        <span style="margin:4px" :class="{ active: item.f }">
                            {{ item.text }}
                            </span>
                      <el-switch
                            v-model="item.f "
                            active-color="item.f && 'rgb(32,160,255)'||''"
                            >
                        </el-switch>
                  </li>
              </ul>
          </el-form-item>
          <el-form-item label="配送费" required>
            <el-input-number v-model="num"
              :min="1" :max="10" 
              label="请输入配送费"
              name = "delivery"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="起送价" required>
            <el-input-number v-model="price"
              :min="20"
              label="请输入起送价"
              name = "price"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="营业时间" required>
            <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '22:30'
            }"
            name ="startTime"
            >
          </el-time-select>&nbsp;&nbsp;-&nbsp;&nbsp;
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              minTime: startTime
            }"
            name = "endTime"
            >
          </el-time-select>
          </el-form-item>
          <el-form-item label="上传店铺logo" prop="logoUr">
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/shop"
                  :auto-upload="false"
                  :on-change="logoImgPreview"
                  :show-file-list="false"
                  :on-success="logoSuccess"
                >
                  <img v-if="logoUrl" :src="logoUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
          </el-form-item>
          <el-form-item label="上传营业执照" prop="type">
            <el-upload
                class="avatar-uploader"
                action="http://localhost:3000/shop"
                :auto-upload="false"
                :on-success="manageSuccess"
                :show-file-list="false"
                :on-change="manageImgPreview"
                >
                <img v-if="mUrl" :src="mUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
          <el-form-item label="上传餐饮许可证" prop="type">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/shop"
              :show-file-list="false"
              :on-success="diningSuccess"
              :auto-upload="false"
              :on-change="diningImgPreview"
            >
              <img v-if="dUrl" :src="dUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即创建</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        logoUrl: '',//店铺logo
        lUrl:'',
        manageUrl: '',//营业许可证
        mUrl:'',
        diningUrl: '',//店铺执照
        dUrl:'',
                // 营业时间
        startTime:'',//起始时间
        endTime:'',//结束时间
        price:'',//起送价
        num:'',//配送费
        ruleForm: {
          name: '',
          adress:'',//店铺详细地址
          tel:'',//联系电话
          info:'',//简介
          slogan:'',//标语
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
         
        },
         value:'',
          options: [{
          value: '指南',
          label: '指南',
          children: [{
            value: '设计原则',
            label: '设计原则',
            children: [{
              value: '一致',
              label: '一致'
            }, {
              value: '反馈',
              label: '反馈'
            }, {
              value: '效率',
              label: '效率'
            }, {
              value: '可控',
              label: '可控'
            }]
          }, {
            value: '导航',
            label: '导航',
            children: [{
              value: '侧向导航',
              label: '侧向导航'
            }, {
              value: '顶部导航',
              label: '顶部导航'
            }]
          }]
        }, {
          value: '组件',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{ 
              value: 'layout 布局',
              label: 'Layout 布局'
            }, {
              value: 'color 色彩',
              label: 'Color 色彩'
            }, {
              value: 'typography 字体',
              label: 'Typography 字体'
            }, {
              value: 'icon 图标',
              label: 'Icon 图标'
            }, {
              value: 'button 按钮',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio 单选框',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox 多选框',
              label: 'Checkbox 多选框'
            }, {
              value: 'input 输入框',
              label: 'Input 输入框'
            }, {
              value: 'input-number 计数器',
              label: 'InputNumber 计数器'
            }, {
              value: 'select 选择器',
              label: 'Select 选择器'
            }, {
              value: 'cascader 级联选择器',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
           address: [
            { required: true, message: '请输入店铺详细地址', trigger: 'blur' },
            { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
          ],
           tel: [
            { required: true, message: '请输入店铺联系电话', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11个字符', trigger: 'blur' }
          ],
           info: [
            {  message: '请输入店铺详细名称', trigger: 'blur' },
            { min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur' }
          ],
           slogan: [
            { required: true, message: '请输入店铺标语', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
           logo: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        feature:[
            {
                id:1,
                text:'品牌保证',
                f:false
            },{
                id:2,
                text:'蜂鸟专送',
                f:false
            },{
                id:3,
                text:'新开店铺',
                f:false
            },{
                id:4,
                text:'外卖保',
                f:false
            },{
                id:5,
                text:'准时达',
                f:false
            },{
                id:6,
                text:'开发票',
                f:false
            }
        ]
      };
    },
    methods: {
      logoImgPreview (file, fileList) {
        let fileName = file.name;
        let regex = /(.jpg|.png|.jpeg)$/;
        if (regex.test(fileName.toLowerCase())) {
          this.lUrl = URL.createObjectURL(file.raw);
          this.logoUrl = file.raw.name
        } else {
          this.$message.error('请选择图片文件');
        }
      },
      manageImgPreview (file, fileList) {
        let fileName = file.name;
        let regex = /(.jpg|.png|.jpeg)$/;
        if (regex.test(fileName.toLowerCase())) {
          this.mUrl = URL.createObjectURL(file.raw);
          this.manageUrl = file.raw.name
        } else {
          this.$message.error('请选择图片文件');
        }
      },
      diningImgPreview (file, fileList) {
        let fileName = file.name;
        let regex = /(.jpg|.png|.jpeg)$/;
        if (regex.test(fileName.toLowerCase())) {
          this.dUrl = URL.createObjectURL(file.raw);
          this.diningUrl = file.raw.name
        } else {
          this.$message.error('请选择图片文件');
        }
      },
      ...mapActions(['add']),
       logoSuccess (res, file) {
          this.logoUrl = URL.createObjectURL(file.raw);
        },
        manageSuccess (res, file) {
            this.manageUrl = URL.createObjectURL(file.raw);
        },
        diningSuccess (res, file) {
            this.diningUrl = URL.createObjectURL(file.raw);
        },
       submitForm() {
        let form = new FormData( $('.upForm' )[0]);
        form.append('region',this.value)

        var featureFlag = [];
        this.feature.map(( item,index ) => {
          // featureFlag['flag_'+index] = item.f
           if ( item.f ) {
              featureFlag.push( item.text )
              return 
            }
        })

        form.append('feature',JSON.stringify(featureFlag))
        form.append('logoUrl',this.logoUrl)
        form.append('manageUrl',this.manageUrl)
        form.append('diningUrl',this.diningUrl)
        form.append('id',this.$route.query.id)
        form.append('_id',this.$route.query._id)
        var that = this
        $.ajax({
          url:'http://localhost:3000/shop',
          type:'PUT',
          cache:false,
          data:form,
          processData: false,//必须
          contentType: false,//必须
          success: function( data ){
            const result = JSON.parse( data )
            switch( result.status ){
                case 0:
                  that.$message({
                    showClose: true,
                    message: '网络异常，请稍后再试',
                    type: 'error'
                  })
                case 2:
                  that.$message({
                    showClose: true,
                    message: '恭喜你，店铺修改成功,即将自动跳转到店铺列表页',
                    type: 'success',
                    duration:2000
                  });
                  setTimeout(( ) => {
                    that.$message.close();
                    // 编程式导航
                    that.$router.push('/shop')
                  },2000)
                  break;
            }
          }
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    mounted(){
      // console.log(this)
      const { name,feature,address,slogan,tel,info,delivery,price,startTime,endTime,logoUrl,manageUrl,diningUrl } =  this.$route.query
      this.feature.map( item => {
        if( feature.indexOf( item.text ) != -1 ){
          item.f = true
          return 
        }
      } )
    this.delivery = delivery 
    this.ruleForm.address = address 
    this.price = price 
    this.startTime = startTime
    this.endTime = endTime
    this.logoUrl = logoUrl
    this.manageUrl = manageUrl
    this.diningUrl = diningUrl
    this.ruleForm.name = name
    this.ruleForm.tel = tel
    this.ruleForm.info = info
    this.ruleForm.slogan = slogan
    }
  }
</script>

<style  >
    .el-cascader-menu__wrap{
        overflow-x: auto!important;
    }
    .active {
        color: rgb(32,160,255);
      }
      .feature{
        display: flex;
        max-width: 350px;
        flex-wrap: wrap;
      }
   
    
</style>