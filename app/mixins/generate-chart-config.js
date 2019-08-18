import Mixin from "@ember/object/mixin"
import {A} from "@ember/array"

//TODO chart config应该放入线上数据库，现在没人放，先在本地生成
export default Mixin.create( {
	generateLines( rowId, chartId ,min,max) {
		return {
            id: rowId,
            height: 305,
            panels: A([{
                id: chartId,
                // animation: false,
                grid: {
                    left: 36,
                    right: 36,
                    top: 32,
                    bottom:24
                },
                xAxis: {
                    show: true,
                    type: 'category',
                    name: '',
                    axisTick: {
                        show: true,
                        alignWithLabel: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            type: 'dotted',
                            color: '#DFE1E6'
                        }
                    },
                    axisLabel: {
                        show: true,
                        color: '#7A869A',
                        fontSize: 14,
                        lineHeight: 20
                    }
                },
                yAxis: {
                    show: true,
                    type: 'value',
                    min: min,
                    max: max,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: '#7A869A',
                        // formatter: function (value) {
                        // 	return value * 100 + axisConfig.unit;
                        // }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dotted',
                            color: '#DFE1E6'
                        }
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: 'rgba(9,30,66,0.54)'
                },
                legend: {
                    show: true,
                    x: 'center',
                    y: 'top',
                    orient: 'horizontal',
                    textStyle: {
                        fontSize: 14,
                        color: '#7A869A'
                    }
                },
                series: [{
                    type: 'line',
                    symbol: 'none',  //这句就是去掉点的  
                    smooth: true
                }, {
                    type: 'line',
                    symbol: 'none',  //这句就是去掉点的  
                    smooth: true
                }]
            }])
        }
	}
} )