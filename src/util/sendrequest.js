import sendLogin from '@/network/request.js'
import router from '@/router/index.js'

export default function send(senddata) {
  sendLogin({
    url: '/reigster',
    method: 'post',
    data: senddata
  }).then(res => {
    router.push('/login')
  })
}
