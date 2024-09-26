import { fetchData } from '../services.js'
import { config } from '../../../../config.js'

export const UserRepository = {
  getUser: async (userId) => {
    const url = `${config.API_URL}/users/${userId}`
    return await fetchData(url)
  }
}
