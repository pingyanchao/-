// todo ======================= 图表概览 =======================
axios('/student/overview', {
  // herders: {
  //   Authorization: localStorage.getItem('token'),
  // },
}).then(({ data: res }) => {
  // console.log(res)
  const { code, data } = res
  if (code === 0) {
    const { avgAge, avgSalary, proportion, total } = data
    qs('.total').innerHTML = total
    qs('.avgSalary').innerHTML = avgSalary
    qs('.avgAge').innerHTML = avgAge
    qs('.proportion').innerHTML = proportion
  } else {
    alert('请初始化数据')
  }
})
axios(
  '/student/list'
  // {
  //   herders: {
  //     Authorization: localStorage.getItem('token'),
  //   },
  // }
).then(({ data: { code, message, data } }) => {
  if (code === 0) {
    renderline(data)
    renderpie(data)
  }
})
// todo ======================= 饼图 =======================

function renderpie(data) {
  console.log(data)
  let arr = []
  data.forEach((item) => {
    let obj = arr.find((i) => i.name === item.province)
    console.log(obj)
    if (obj) {
      console.log(11)
      obj.value++
    } else {
      arr.push({ name: item.province, value: 1 })
      console.log(222)
    }
  })
  console.log(arr)
  const mychart = echarts.init(qs('.pie'))
  let option = {
    title: {
      text: '籍贯 Hometown',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}人 ({d}%)',
    },
    series: [
      {
        type: 'pie',
        name: '省份',
        radius: [20, 140],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 40, name: '北京' },
          { value: 38, name: '山东' },
          { value: 32, name: '上海' },
          { value: 30, name: '江苏' },
          { value: 28, name: '河北' },
          { value: 26, name: '山西' },
          { value: 22, name: '河南' },
          { value: 18, name: '辽宁' },
        ],
      },
    ],
  }
  mychart.setOption(option)
}

// todo ======================= 地图 =======================

// todo ======================= 柱状图 =======================
{
  const mychart = echarts.init(qs('.barChart'))
  let option = {
    legend: {},
    grid: {
      bottom: '30',
      left: '100',
    },
    xAxis: {
      data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
      axisPointer: {
        type: 'shadow',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value}分',
        },
      },
      {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value}人',
        },
      },
    ],
    series: [
      {
        type: 'bar',
        name: '平均分',

        barWidth: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value + '分'
          },
        },
        data: [83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78],
      },
      {
        type: 'bar',
        name: '低于60分人数',
        yAxisIndex: 1,
        barWidth: '10%',

        tooltip: {
          valueFormatter: function (value) {
            return value + '人'
          },
        },
        data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2],
      },
      {
        type: 'bar',
        name: '60到80之间',
        yAxisIndex: 1,

        barWidth: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value + '人'
          },
        },
        data: [1, 4, 2, 4, 5, 2, 1, 3, 3, 2, 2, 4],
      },
      {
        type: 'bar',
        name: '高于80分人数',
        yAxisIndex: 1,

        barWidth: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value + '人'
          },
        },
        data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4],
      },
    ],
  }
  mychart.setOption(option)
}
// todo  ======================= 折线图 =======================
function renderline(data) {
  const mychart = echarts.init(qs('.line'))
  let option = {
    title: {
      text: '薪资 Salary ',
    },
    xAxis: {
      boundaryGap: false,
      data: data.map((item) => item.name),
    },
    yAxis: {
      boundaryGap: [0, '100%'],
    },
    series: [
      {
        name: '期望薪资',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: data.map((item) => item.salary),
      },
      {
        name: '实际薪资',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: data.map((item) => item.truesalary),
      },
    ],
    legend: {},
    tooltip: {
      trigger: 'axis',
    },
    color: ['red', 'blue'],
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 10,
      },
    ],
  }
  mychart.setOption(option)
}
