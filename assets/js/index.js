if (!localStorage.getItem('token')) {
  location.href = './login.html'
}
// ======================= 所有菜单切换时加背景色 =======================
qsAll('.nav li a').forEach((item, index) => {
  item.onclick = function () {
    qsAll('.nav li a').forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  }
  // 默认首个a标签高亮
  if (index === 0) item.onclick()
})

// todo ======================= 退出登录 =======================
qs('.right a').addEventListener('click', function () {
  let file = confirm('确定要退出吗您？')
  // console.log(file)
  if (!file) return
  localStorage.removeItem('token')
  location.href = './login.html'
})

// todo ======================= 初始化数据 =======================
// 初始化数据
