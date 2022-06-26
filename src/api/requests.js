import axios from 'axios'

/** Получение определённое количество пользователей (API)
 * @count количество пользователей
 * */
export function getUsers (count) {
  return axios.get(`https://randomuser.me/api?inc=name,id,picture,phone,email&results=${count}`)
}
