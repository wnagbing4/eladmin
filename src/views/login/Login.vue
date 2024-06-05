<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="image_box">
    <div class="Login_box">
      <div class="header_box">ELADMIN 后台管理系统</div>
      <div class="center_box">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item prop="username" hide-required-asterisk style="width: 336px; height: 39px">
            <el-input v-model="ruleForm.username" :prefix-icon="Avatar" />
          </el-form-item>
          <el-form-item prop="password" hide-required-asterisk style="width: 336px; height: 39px">
            <el-input
              v-model="ruleForm.password"
              @change="save"
              :prefix-icon="GoodsFilled"
              type="password"
            />
          </el-form-item>
          <div class="img_box">
            <el-input
              v-model="ruleForm.code"
              style="width: 212px; height: 39px"
              :prefix-icon="SuccessFilled"
            />
            <div class="images_box" @click="getImg">
              <img :src="form.imgs" alt="" />
            </div>
          </div>
          <el-checkbox label="记住我" size="large" style="margin-top: 5px" />
        </el-form>
      </div>
      <div class="bottom_box">
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { getImage, Login } from '../../api/api'
import { GoodsFilled, Avatar, SuccessFilled } from '@element-plus/icons-vue'
import { useStore } from '../../stores/counter'
import { useRouter } from 'vue-router'
import { setToken, getToken } from '../../utils/auth'
import { encrypted } from './Encipher'
import { ElMessage } from 'element-plus'
const store = useStore()
const router = useRouter()
interface RuleForm {
  username: string
  password: string
  code: string
  uuid: string
  copyPassword: string
}
const form = reactive({
  imgs: '',
  checked1: 'false'
})
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: '123456',
  code: '',
  uuid: '',
  copyPassword: '123456'
})

const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输如账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
setToken('copyPassword', ruleForm.password)
const save = () => {
  setToken('copyPassword', ruleForm.password)
  ruleForm.copyPassword = ruleForm.password
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (ruleForm.copyPassword === getToken('copyPassword')) {
        ruleForm.copyPassword = encrypted(ruleForm.copyPassword) as string
        console.log(ruleForm.copyPassword)
      }
      Login({
        username: ruleForm.username,
        uuid: ruleForm.uuid,
        password: ruleForm.copyPassword,
        code: ruleForm.code
      })
        .then((res: any) => {
          console.log(res)

          if (!res.status) {
            console.log(res, 'res')
            store.getTokens(res.token)
            setToken('Authorization', res.token)
            router.replace('/dashboard')
          } else {
            ElMessage.error(res.message)
          }
        })
        .catch((error: any) => {
          console.log(error, 'error')
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 获取验证码
const getImages = async () => {
  let res: any = await getImage()
  console.log(res, 'data')
  form.imgs = res.img
  // form.imgs = res.img;
  ruleForm.uuid = res.uuid
}
getImages()
// 点击更换验证码
const getImg = () => {
  getImages()
}
</script>

<style lang="scss" scoped>
.image_box {
  width: 100%;
  height: 100%;
  background: url('../../assets/image/background.jpeg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .Login_box {
    width: 23.75rem;
    height: 20.75rem;
    background-color: white;
    .header_box {
      width: 100%;
      height: 20%;
      color: #707070;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
    }
    .center_box {
      width: 100%;
      height: 60%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .img_box {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
    .bottom_box {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      button {
        width: 90%;
      }
    }
  }
}
</style>
