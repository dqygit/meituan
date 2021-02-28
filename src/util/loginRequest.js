import sendLogin from '@/network/request.js'
import router from '@/router/index.js'

export default function loginRequest(user, pass) {
  sendLogin({
    url: '/login',
    method: 'post',
    data: {
      userId: user,
      userPass: pass
    }
  }).then(res => {
    if (res.data.err_d === 0) {
      router.push({ path: '/platform', query: { username: res.data.username } })
    }
  })
}
