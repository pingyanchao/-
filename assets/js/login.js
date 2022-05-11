// todo ======================== 点击去注册 ========================
let login =qs('.login')
let register =qs('.register')
qs('.login .mb-3 a').addEventListener('click',function(e){
  // console.log('点击了');
  login.classList.remove('show')
  register.classList.remove('hide')
  login.classList.add('hide')
  register.classList.add('show')
  registerform.reset()
})

// todo ======================== 点击去登录 ========================
qs('.register .mb-3 a').addEventListener('click',function(){
  console.log('点击了');
  login.classList.remove('hide')
  register.classList.remove('show')
  login.classList.add('show')
  register.classList.add('hide')
  loginform.reset()
})

// todo ======================== 注册功能 ========================
let registerform=qs('.register form')
console.log(registerform);
registerform.addEventListener('submit',function(e){
  e.preventDefault()
  // console.log('注册提交');
  let username = qs('.register [type="text"]').value
  let password = qs('.register [type="password"]').value
  if(!username||!password) return alert('请输入内容')
  // console.log(username,password);
  axios.post('/api/register',{username,password}).then(({data:{code,message}})=>{
    // console.log(res);
    if(code===0){
      alert(message)
      qs('.register .mb-3 a').click()
      registerform.reset()
    }else{
      alert(message)

    }
  }).catch( (res)=> {
    console.log(res);
  });
})
// todo ======================== 登录功能 ========================
let loginform=qs('.login form')
console.log(loginform);
loginform.addEventListener('submit',function(e){
  e.preventDefault()
  // console.log('注册提交');
  let username = qs('.login [type="text"]').value
  let password = qs('.login [type="password"]').value
  if(!username||!password) return alert('请输入内容')
  // console.log(username,password);
  axios.post('/api/login',{username,password}).then(({data:{code,message,token}})=>{
   
    if(code===0){
      alert(message)
      loginform.reset()
      localStorage.setItem('token',token)
      location.href='./index.html'
    }else{
      alert(message)

    }
  })
})
