// ======================= 所有菜单切换时加背景色 ======================= 
qsAll('.nav li a').forEach((item, index) => {
  item.onclick = function () {
    qsAll('.nav li a').forEach(item => item.classList.remove('active'))
    this.classList.add('active')
  }
  // 默认首个a标签高亮
  if (index === 0) item.onclick()
})


// todo ======================= 退出登录 =======================


// todo ======================= 初始化数据 =======================
