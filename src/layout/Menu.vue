<template>
  <MenuLogo></MenuLogo>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <!-- 使用router模式后，菜单的Index就是路径path -->
  <el-menu router 
  :default-active="activeIndex" 
  class="el-menu-vertical-demo" 
  :collapse="isCollapse" 
  background-color="#304156">
    <el-sub-menu>
      <template #title>
        <el-icon class="white">
          <location />
        </el-icon>
        <span class="white">菜品</span>
      </template>
      <el-menu-item index="/category">
        <el-icon>
          <Menu />
        </el-icon>
        <template #title>菜品分类</template>
      </el-menu-item>
      <el-menu-item index="/goods">
        <el-icon>
          <Memo />
        </el-icon>
        <template #title>菜品管理</template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/order">
      <el-icon>
        <Monitor />
      </el-icon>
      <template #title>订单</template>
    </el-menu-item>
    <el-menu-item index="/banner">
      <el-icon>
        <Calendar />
      </el-icon>
      <template #title>广告</template>
    </el-menu-item>
    <el-menu-item index="/comment">
      <el-icon>
        <Edit />
      </el-icon>
      <template #title>评论</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon>
        <User />
      </el-icon>
      <template #title>用户</template>
    </el-menu-item>
  </el-menu>
</template>
  
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Calendar,
  Edit,
} from '@element-plus/icons-vue'
import MenuLogo from './MenuLogo.vue';
const isCollapse = ref(true)
//获取当前路由
const route=useRoute()
//获取激活选项
const activeIndex=computed(()=>{
    const {path}=route
    return path
})
</script>
  
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
.white{
  color:#fff
}
  .el-menu-item
  {
    color: #fff;
  }
}
</style>
  