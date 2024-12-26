<!-- vb快速排版 -->
<template>
    <el-container class="layout">
        <!-- <el-aside width="220px" class="asside">
            <Menu></Menu>
        </el-aside> -->
        <el-container>
            <el-header class="header">
                <span class="title">知遇</span>
                <span>
                    <el-tabs style="font-size: large;">
                        <span v-for="ll in ['首页', '知遇知学堂', '等你来答', '知遇直答']">
                            <el-tab-pane :label="ll"></el-tab-pane>
                        </span>
                    </el-tabs>
                </span>
                <el-input size="100px" placeholder="搜索你感兴趣的内容..."
                    style="border-radius: 100px; margin-left:50px;width: 400px;height: 40px;">
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <search />
                        </el-icon>
                    </template>
                </el-input>
                <el-button round
                    style="margin-left: 10px;color:white;letter-spacing:3px;font-weight: bold;width: 90px;height: 40px;"
                    type="primary">
                    提问
                </el-button>
                <span style="padding:0 20px;">
                    <el-icon class="Bell">
                        <Bell />
                    </el-icon>
                    <div style="cursor: pointer;">消息</div>
                </span>
                <span style="padding:0 20px;"><el-icon class="Message">
                        <Message />
                    </el-icon>
                    <div style="cursor: pointer;">私信</div>
                </span>
                <span style="padding:0 20px;"><el-icon class="User">
                        <User />
                    </el-icon>
                    <div style="cursor: pointer;">创作中心</div>
                </span>
            </el-header>
            <div class="line"></div>
            <el-main class="main">
                <div style="display: flex;">
                    <div class="cabin1" style="margin-left:120px;background-color: #fff;
">
                        <div v-for="item in cataArray">
                            <div style="margin-left: 12px;margin-top: 18px;">
                                <span style="font-weight: bold;">{{ item.head }}</span>
                                <span style="margin:10px;color:#3041565b">|</span>
                                <span style="cursor: pointer;"  v-for="(d,index) in item.desc.split('·')">{{" "+(index===0?"":"·")+" "+d }}</span>
                            </div>

                        </div>
                    </div>
                    <div class="image"></div>
                    <div class="cabin1">
                        <div style="width:100%;height:100px;display: flex;">
                            <div style="background-color: white;border-radius: 10px;width: 40%;margin: 10px;">
                                <div style="text-align: center;margin-top: 10px;">已学课程</div>
                                <div style="text-align: center;margin-bottom: 1px;"><span style="text-align: center;font-size: large;font-weight: bold;">18</span>&nbsp;门</div>
                            </div>
                            <div style="background-color: white;border-radius: 10px;width: 40%;margin: 10px;">
                                <div style="text-align: center;margin-top: 10px;">已读内容</div>
                                <div style="text-align: center;margin-bottom: 1px;"><span style="font-size: large;font-weight: bold;">6</span>&nbsp;篇</div>
                            </div>
                        </div>
                        <div style="width:100%;height: 100px;margin-top: -10px;">
                            <el-tabs>
                                <el-tab-pane label="已购"></el-tab-pane>
                                <el-tab-pane label="最近学习"></el-tab-pane>
                            </el-tabs>
                            <div style="background-color: white;border-radius: 12px; width: 100%;height: 138%;margin-top: -20px;">
                                <div v-for="item in ['chatGPT会带来失业潮吗？','真正打动过你的一个设计是什么？']" style="margin:10px 20px;">
                                    <div  style="font-weight: bold;font-size: medium;">{{item}}</div>
                                    <div style="color:#6B6F6E;font-size: small;">回答：已阅读</div>
                                </div>
                                <div style="text-align: center;">
                                    <el-button type=primary round>前往学习中心》</el-button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style="background-color: white;height: 100%;width:110%;margin-top:20px;margin-left: -20px;display:flex">
                    <div style="width:62%">
                        <div style="padding-top:20px">
                            <span
                                style="font-size: larger;font-weight:bolder;color:#002FF1;margin-left:140px;">精选好课</span>
                            <span style="margin-left:20px;color:#6B6F6E;">专业课程&nbsp;&nbsp;名师亲授&nbsp;&nbsp;全方位服务</span>
                        </div>
                        <div style="display: flex;margin-left: 120px;">
                            <div class="cabin2 " style="margin-left:20px">
                                <div class="image2" style=""></div>
                                <div style="font-weight: bold;margin:5px">AI应用实战训练营</div>
                                <div class="small-text">AI技能变现，主业副业双引擎</div>
                                <div style="cursor :pointer;color:red;text-align: right;font-weight: bold;margin-top: 30px;">免费报名</div>
                            </div>
                            <div class="cabin2" style="margin-left:20px">
                                <div class="image3" style=""></div>
                                <div style="font-weight: bold;margin:5px">小说推文&短剧推广训练营</div>
                                <div class="small-text">网文短句封口，变现技能渠道两手抓</div>
                                <div style="cursor :pointer;color:red;text-align: right;font-weight: bold;margin-top: 30px;">免费报名</div>
                            </div>
                            <div class="cabin2" style="margin-left:20px">
                                <div class="image4" style=""></div>
                                <div style="font-weight: bold;margin:5px">AI解决方案专家培养计划</div>
                                <div class="small-text">逐浪大模型&nbsp;28+行业案例解析</div>
                                <div style="cursor :pointer;color:red;text-align: right;font-weight: bold;margin-top: 30px;">免费报名</div>

                            </div>
                        </div>
                    </div>
                    <div class="cabin3" style="margin-left:40px">
                        <div style="font-size: large;font-weight: bold;margin-top: 10px;cursor: pointer;">更多回答&nbsp;|&nbsp;文章</div>
                        <div style="margin-top: 20px;font-weight: bold;cursor:pointer">当下的AI真的是挣钱的一个风口吗？</div>
                        <div>100%是！参考中信建投的康波周期图：[图片]&nbsp;&nbsp;&nbsp;<span style="color:#002FF1;font-weight: bold;cursor: pointer;">查看原文</span></div>
                        <div style="font-size: large;font-weight: bold;margin-top: 70px;">课程周榜</div>
                    </div>

                </div>
                <!-- <router-view /> -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { arrayBuffer } from 'node:stream/consumers';
import Menu from './Menu.vue'
interface catagory {
    head: string,
    desc: string
}
const cataArray: catagory[] = [{ head: '职场办公', desc: '设计·办公软件' },
{ head: '兴趣技能', desc: '摄影摄像·写作' },
{ head: '语言学习', desc: '雅思·托福·实用英语' },
{ head: '考试考证', desc: '会计·考研·CPA/CFA' },
{ head: '编程', desc: '人工智能·大数据' },
{ head: '通识', desc: '心理/健康·人文艺术' }]
// const str="nini"
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .asside {
        background-color: #3041565b;

    }
}
.image2{
    background-image: url('../assets/advertise.png');
    background-size: cover;width: 98%;height: 150px;
    border-radius: 10px;
}
.image3{
    background-image: url('../assets/recruit.png');
    background-size: cover;width: 98%;height: 150px;
    border-radius: 10px;
}
.image4{
    background-image: url('../assets/AI.png');
    background-size: cover;width: 98%;height: 150px;
    border-radius: 10px;
}
.header{
    padding-top: 10px;
    display: flex;
}
.small-text{
    font-size:small;
    color:#959595;
    margin-left: 10px;
}
.cabin1 {
    width: 280px;
    height: 280px;
    // background-color: #e2e1e1;
    // background-color: #fff;
    border-radius: 10px;
    // margin-left: 100px
}

.cabin2 {
    width: 280px;
    height: 280px;
    background-color: #fff;
    border-radius: 10px;
    border:1px solid #00000052;
    // margin-left: 100px
}

.cabin3 {
    width: 280px;
    height: 300px;
    background-image: linear-gradient(to bottom, rgb(216, 240, 253), rgb(242, 246, 249),white,white);
    border-radius: 10px;
    margin-top: 20px;
    // margin-left: 100px
}

.image {
    width: 550px;
    height: 280px;
    background-color: #e2e1e1;
    border-radius: 10px;
    margin: 0 20px;
    background-image: url("../assets/advertise.png");
    background-size: cover;
}

.title {
    padding: 0 100px;
    // background-color: rgb(248, 249, 249);
    font-weight: 1000;
    font-size: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #3475be;
    letter-spacing: 5px;
}

.line {
    height: 2.5px;
    width: 100%;
    background-color: #cecfd1
}

.main {
    background-color: rgb(231, 244, 253);
}
</style>