import GoogleAuth from '@/config/google.js'
var Vue = require('vue')
const gauthOption = {
  clientId: '165758848498-adunc05cd64jpigenud7idbfnmjn1tha.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)