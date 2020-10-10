<template>
<div class="echarts">
    <div :style="{ height: '800px', width: '100%' }" ref="myEchart"></div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    // Provide
} from 'vue-property-decorator';
import echarts from 'echarts';
import '../../node_modules/echarts/map/js/china'; // 引入中国地图数据
@Component({})
export default class ClassName extends Vue {
    private chart: any = null;
    private mounted() {
        this.chinaConfigure();
    }
    private beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    }
    private randomValue() {
        return Math.round(Math.random() * 1000);
    }
    private chinaConfigure() {
        var dataList = [{
                name: "南海诸岛",
                value: 0
            },
            {
                name: "北京",
                value: this.randomValue()
            },
            {
                name: "天津",
                value: this.randomValue()
            },
            {
                name: "上海",
                value: this.randomValue()
            },
            {
                name: "重庆",
                value: this.randomValue()
            },
            {
                name: "河北",
                value: this.randomValue()
            },
            {
                name: "河南",
                value: this.randomValue()
            },
            {
                name: "云南",
                value: this.randomValue()
            },
            {
                name: "辽宁",
                value: this.randomValue()
            },
            {
                name: "黑龙江",
                value: this.randomValue()
            },
            {
                name: "湖南",
                value: this.randomValue()
            },
            {
                name: "安徽",
                value: this.randomValue()
            },
            {
                name: "山东",
                value: this.randomValue()
            },
            {
                name: "新疆",
                value: this.randomValue()
            },
            {
                name: "江苏",
                value: this.randomValue()
            },
            {
                name: "浙江",
                value: this.randomValue()
            },
            {
                name: "江西",
                value: this.randomValue()
            },
            {
                name: "湖北",
                value: this.randomValue()
            },
            {
                name: "广西",
                value: this.randomValue()
            },
            {
                name: "甘肃",
                value: this.randomValue()
            },
            {
                name: "山西",
                value: this.randomValue()
            },
            {
                name: "内蒙古",
                value: this.randomValue()
            },
            {
                name: "陕西",
                value: this.randomValue()
            },
            {
                name: "吉林",
                value: this.randomValue()
            },
            {
                name: "福建",
                value: this.randomValue()
            },
            {
                name: "贵州",
                value: this.randomValue()
            },
            {
                name: "广东",
                value: this.randomValue()
            },
            {
                name: "青海",
                value: this.randomValue()
            },
            {
                name: "西藏",
                value: this.randomValue()
            },
            {
                name: "四川",
                value: this.randomValue()
            },
            {
                name: "宁夏",
                value: this.randomValue()
            },
            {
                name: "海南",
                value: this.randomValue()
            },
            {
                name: "台湾",
                value: this.randomValue()
            },
            {
                name: "香港",
                value: this.randomValue()
            },
            {
                name: "澳门",
                value: this.randomValue()
            }
        ];
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        /* 添加点击事件 */
        myChart.on("click", (param: any) => {
            console.log(param);
            alert(param.data.name);
            // this.$router.push("/home/importData");
        });
        let option = {
            tooltip: {
                formatter: function (params: any, ticket: any, callback: Function) {
                    if (!params.value) {
                        params.value = "-";
                    }
                    return (
                        params.seriesName + "<br />" + params.name + "：" + params.value
                    );
                } //数据格式化
            },
            visualMap: {
                min: 0,
                max: 1500,
                left: "left",
                top: "bottom",
                text: ["高", "低"], //取值范围的文字
                inRange: {
                    color: ["#e0ffff", "#006edd"] //取值范围的颜色
                },
                show: true //图注
            },
            geo: {
                map: "china",
                roam: false, //不开启缩放和平移
                zoom: 1.23, //视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize: "10",
                        color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#F3B329", //鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            },
            series: [{
                name: "信息量",
                type: "map",
                geoIndex: 0,
                data: dataList
            }]
        };
        myChart.setOption(option);
    }
}
</script>
