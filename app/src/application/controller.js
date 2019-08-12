import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import {A } from '@ember/array';

let queryAddress = EmberObject.create({
    host: 'http://192.168.100.174',
    port: 9001,
    version: 'v1.0',
    db: 'DL'
}),
dynamic = EmberObject.create({
    isDynamic: true,
    interval: 1000
})
export default Controller.extend({
    monitoring: EmberObject.create({
        id: 'monitoringContainer',
        height: 305,
        panels: [{
            id: 'monitoringExampleForCPU',
            // animation: false,
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
        }]
    }),
    monitoringConditionForCPU: [{
        queryAddress,
        dynamic,
        data: {
            "model": "es",
            "query": {
                "search": {
                    "from":10,
                    "size": 70,
                    "sort": ["-time.keyword"],
                }
            },
            "format": [
                {
                    "class": "pivot",
                    "args": {
                        "yAxis": "time",
                        "xAxis": "hostname",
                        "value": "cpu"	// cpu / receive / transmit / disk / memory
                    }
                }
            ]
        }
    }],
    monitoringMemory: EmberObject.create({
        id: 'monitoringContainer1',
        height: 305,
        panels: [{
            id: 'monitoringExampleForMemory',
            // animation: false,
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
        }]
    }),
    monitoringConditionForMemory: A([{
        queryAddress: {
            host: 'http://192.168.100.174',
            port: 9001,
            version: 'v1.0',
            db: 'DL'
        },
        dynamic: {
            isDynamic: true,
            interval: 1000
        },
        data: {
            "model": "es",
            "query": {
                "search": {
                    "size": 70,
                    "sort": ["-time.keyword"],
                }
            },
            "format": [
                {
                    "class": "pivot",
                    "args": {
                        "yAxis": "time",
                        "xAxis": "hostname",
                        "value": "memory"	// cpu / receive / transmit / disk / memory
                    }
                }
            ]
        }
    }]),
    monitoringReceive: EmberObject.create({
        id: 'monitoringContainer2',
        height: 305,
        panels: [{
            id: 'monitoringExampleForReceive',
            // animation: false,
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
        }]
    }),
    monitoringConditionForReceive: A([{
        queryAddress: {
            host: 'http://192.168.100.174',
            port: 9001,
            version: 'v1.0',
            db: 'DL'
        },
        dynamic: {
            isDynamic: true,
            interval: 1000
        },
        data: {
            "model": "es",
            "query": {
                "search": {
                    "size": 70,
                    "sort": ["-time.keyword"],
                }
            },
            "format": [
                {
                    "class": "pivot",
                    "args": {
                        "yAxis": "time",
                        "xAxis": "hostname",
                        "value": "receive"	// cpu / receive / transmit / disk / memory
                    }
                }
            ]
        }
    }]),
    monitoringTransmit: EmberObject.create({
        id: 'monitoringContainer3',
        height: 305,
        panels: [{
            id: 'monitoringExampleForTransmit',
            // animation: false,
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
        }]
    }),
    monitoringConditionForTransmit: A([{
        queryAddress: {
            host: 'http://192.168.100.174',
            port: 9001,
            version: 'v1.0',
            db: 'DL'
        },
        dynamic: {
            isDynamic: true,
            interval: 1000
        },
        data: {
            "model": "es",
            "query": {
                "search": {
                    "size": 70,
                    "sort": ["-time.keyword"],
                }
            },
            "format": [
                {
                    "class": "pivot",
                    "args": {
                        "yAxis": "time",
                        "xAxis": "hostname",
                        "value": "transmit"	// cpu / receive / transmit / disk / memory
                    }
                }
            ]
        }
    }]),
    monitoringDisk: EmberObject.create({
        id: 'monitoringContainer4',
        height: 305,
        panels: [{
            id: 'monitoringExampleForDisk',
            // animation: false,
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
        }]
    }),
    monitoringConditionForDisk: A([{
        queryAddress: {
            host: 'http://192.168.100.174',
            port: 9001,
            version: 'v1.0',
            db: 'DL'
        },
        dynamic: {
            isDynamic: true,
            interval: 1000
        },
        data: {
            "model": "es",
            "query": {
                "search": {
                    "size": 70,
                    "sort": ["-time.keyword"],
                }
            },
            "format": [
                {
                    "class": "pivot",
                    "args": {
                        "yAxis": "time",
                        "xAxis": "hostname",
                        "value": "disk"	// cpu / receive / transmit / disk / memory
                    }
                }
            ]
        }
    }]),
});
