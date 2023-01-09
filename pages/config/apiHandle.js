import axios from "axios"

export const baseUrl = 'http://192.168.100.14:5000/'

export const apiHandle = (token) => {
 
  if (token) {
    return axios.create({
      baseURL: `${baseUrl}`,
      headers: { ...axios.defaults.headers, Authorization: `Bearer ${token}` }
    })
  }
  else {
    return axios.create({
      baseURL: `${baseUrl}`,
      headers: { ...axios.defaults.headers }
    })
  }
}

