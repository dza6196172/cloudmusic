<template>
    <div class="big-box">
        <div class="icon-box">
            <div class="icon"></div>
        </div>
        <div>
            <div class="info-box">
                <span>嗨，你好！我是西智，开始咨询前请先回答几个问题哦</span>
            </div>
            <div class="info-box">
                <span>请问您家宝宝的性别是？</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomerService',
    // 组件传值
    props: {},
    // 注册组件
    components: {},
    // 数据
    data() {
        return {};
    },
    // 计算属性
    computed: {},
    // 监听
    watch: {},
    // 创建完成
    created() {},
    // 挂载完成
    mounted() {},
    // 方法
    methods: {},
};
</script>

<style scoped lang="scss">
.big-box {
    width: 375px;
    height: 724px;
    background: #f5f5f5;
    padding: 0 8px;
    box-sizing: border-box;
}
.icon-box {
    width: 45px;
    height: 45px;
    background: red;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 20px;
    .icon {
        z-index: 7;
        width: 26px;
        height: 38px;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdab02f239c15fe5736647afa7cc7b89c0a145d9f2865b3865a87ebdf8a2f52b1)
            0px 0px no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        line-height: 38px;
    }
}
.info-box {
    width: fit-content;
    padding: 0 15px;
    box-sizing: border-box;
    max-width: 240px;
    margin-top: 16px;
    height: 64px;
    font-size: 14px;
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
}
.info-box:first-child {
    margin-top: 28px;
}
</style>
