import axios from 'axios'

export function getUsers (count) {
  return axios.get(`https://randomuser.me/api?inc=name,id,picture,phone,email&results=${count}`)
}
