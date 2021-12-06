<template>
    <div class="login">
     <div class="login-template">
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请重新输入用户名' }] },
        ]"
        placeholder="请输入用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请重新输入密码' }] },
        ]"
        type="password"
        placeholder="请输入密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        记住密码
      </a-checkbox>
      <a class="login-form-forgot" href="">
        忘记密码
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
      <a href="">
        立即注册
      </a>
    </a-form-item>
  </a-form>
        </div>
    </div>
</template>
<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods:{
    handleSubmit(e) {
    e.preventDefault();
    // this.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    this.$router.push({path: '/home'})
  },
  }
}
</script>
<style lang="less">
#components-form-demo-normal-login{
  width: 320px;
.login-form {
  max-width: 300px;
  }
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
}
.login{
    .login-template{
      width: 400px;
      height:400px;
      margin: 100px auto;
      border: 1px solid rgb(204, 203, 203);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>