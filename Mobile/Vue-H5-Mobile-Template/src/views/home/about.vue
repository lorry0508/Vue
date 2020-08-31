<!-- home -->
<template>
    <div class="about-container">
        <div class="warpper">
            <div class="list">
                <div class="logo"></div>
                <div class="demo-home__title">VUE H5 Mobile开发模板</div>
                <div class="item">
                    项目地址:
                    <a
                        href="https://github.com/lorry0508/Vue/tree/master/Mobile/Vue-H5-Mobile-Template"
                    >https://github.com/lorry0508/Vue/tree/master/Mobile/Vue-H5-Mobile-Template</a>
                </div>
                <div class="item">项目作者: lorry0508</div>
                <div class="item"></div>
                <div class="wechat">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="item">基于vue的vant移动端模板</div>
                <div class="item">
                    {{ userName }}
                    <van-button v-if="userName == ''" round type="info" size="small" @click="doDispatch">点击~</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            imgUrl: '@/assets/img/kaola.jpg'
        };
    },
    computed: {
        ...mapGetters(['userName'])
    },
    mounted() {
        this.initData();
        // console.log(this.$cdn, '测试')
    },
    methods: {
        initData() {
        
        },
        doDispatch() {
            this.$store.dispatch('setUserName', '就这样')
        },
        goGithub(index) {
            window.location.href = "https://github.com/lorry0508/Vue/tree/master/Mobile/Vue-H5-Mobile-Template";
        },
    },
};
</script>
<style lang="scss" scoped>
.about-container {
    background: #fff;
    height: 100vh;
    box-sizing: border-box;
    .warpper {
        padding: 50px 12px 12px 12px;
        .list {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #666;
            font-size: 14px;
            .demo-home__title {
                margin: 0 0 6px;
                font-size: 28px;
                .demo-home__title img,
                .demo-home__title span {
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .item {
                    font-size: 14px;
                    line-height: 34px;
                a {
                    text-decoration: underline;
                }
                .van-button {
                    /* vant-ui 元素*/
                    background: skyblue;
                }
            }

            .logo {
                width: 120px;
                height: 120px;
                background: url($cdn+"/weapp/logo.png") center / contain no-repeat;
            }
            .wechat {
                width: 200px;
                height: 200px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>
