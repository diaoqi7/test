/*
* @Author: diaoqi
* @Date:   2017-02-22 15:16:13
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-02-22 15:20:44
*/


require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        require(
            [
                'echarts',
                'echarts/theme/macarons',
                'echarts/chart/bar',
                'echarts/chart/line'
            ],
            function (ec,theme) {
                var myChart = ec.init(document.getElementById('bar1'),theme); 
                
                var option = {
                    title : {
                        text: '考点：集合 大数据得分率对照表',
                        subtext: '2017',
                        x: "center",
                        textStyle:{
                            color: "black",
                            fontSize: 16
                        }
                    },
                    tooltip: {

                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    legend: {
                        data:['2017年应届得分率','2012-2016得分率'],
                        x: 'center',
                        y:"bottom",
                        calculable : true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["全省","豫南九校","中原名校","省一本","名校一本","九校一本","省培优生","九校培优","名校培优"],
                            boundaryGap : true
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"2017年应届得分率",
                            "type":"bar",
                            "data":[0.259, 0.595, {value: 0.458,itemStyle:{ normal:{color:'#2EC7C9'} } }, 0.595, 0.963, 0.595, 0.957, 0.114, 0.827],
                            itemStyle: {normal: {areaStyle: {type: 'default'}}}
                        },
                        {
                            "name":"2012-2016得分率",
                            "type":"bar",
                            "data":[0.322, 0.118, 0.310, 0.144, 0.392, 0.294, 0.461, 0.248, 0.917],
                            itemStyle: {normal: {areaStyle: {type: 'default'}}}
                        }
                    ]
                };
                myChart.setOption(option); 
            }
        );





require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        require(
            [
                'echarts',
                'echarts/theme/macarons',
                'echarts/chart/bar',
                'echarts/chart/line'
            ],
            function (ec,theme) {
                var myChart = ec.init(document.getElementById('line1'),theme); 
                
                var option = {
                    title : {
                        text: '考点：考点1 集合',
                        subtext: '2017',
                        x: "center",
                        textStyle:{
                            color: "black",
                            fontSize: 16
                        }
                    },
                    tooltip: {

                        trigger: 'axis',
                        axisPointer : {      
                            type : 'line'
                        }
                    },
                    legend: {
                        data:['2017年应届得分率','2012-2016得分率'],
                        x: 'center',
                        y:"bottom",
                        calculable : true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["全省","豫南九校","中原名校","省一本","名校一本","九校一本","省培优生","九校培优","名校培优"],
                            boundaryGap : false,
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:"2017年应届得分率",
                            type:"line",
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            },
                            data:[0.21, 0.31, 0.25, 0.33, 0.22, 0.23, 0.20, 0.30, 0.37]
                        },
                        {
                            name:"2012-2016得分率",
                            type:"line",
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            },
                            data:[0.51, 0.61, 0.55, 0.53, 0.62, 0.53, 0.60, 0.51, 0.45]
                        }
                    ]
                };
        
                myChart.setOption(option); 
            }
        );