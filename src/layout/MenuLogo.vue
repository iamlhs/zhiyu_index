<template>
    <div class="logo">
       <img :src="MenuLogo" />
       <span class="logo-title">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
    import{ref} from 'vue'
    const MenuLogo=ref(
        "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
    )
    const title=ref("知遇")
</script>

<style lang="scss" scoped>
.logo{
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    align-items: center;
    background-color: #000;
    // cursor: pointer;
    img{
        width: 36px;
        height: 36px;
        margin-left:20px;
        margin-right:12px;
    }.logo-title{
        color: blue;
        font-weight: bold;
        font-size:18px;
    }
}
</style>