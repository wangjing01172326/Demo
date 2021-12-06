<template>
      <div><a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
          <img v-show="!collapsed" src="../image/logo.jpeg" alt="">
      </div>
      <a-menu theme="dark" :selected-keys="tabHandle" @click="handleClick">
          <a-menu-item key="/home">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="/member">
          <a-icon type="user" />
          <span>会员管理</span>
        </a-menu-item>
        <a-menu-item key="/stock">
          <a-icon type="shopping" />
          <span>库存管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span class="exit" @click="exitHandle">退出</span>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout></div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  computed:{
    //默认当前tab栏
      tabHandle(){
        return this.$route.path===localStorage.getItem('path')?[this.$route.path]:['/home']
      }
  },
  methods:{
      handleClick(e){
        localStorage.setItem('path',e.key)
        this.$router.push({path: e.key})
      },
      exitHandle(){
          this.$router.push({path: '/'})
      }
  }
};
</script>
<style lang="less">
.ant-layout{
    height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
  img{
    width: 114px;
    height: 44px;
  }
}
</style>