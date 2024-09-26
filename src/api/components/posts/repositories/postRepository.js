import { fetchData } from '../services.js'
import { config } from '../../../../config.js'

export const PostRepository = {
  getPosts: async (start, size) => {
    const url = `${config.API_URL}/posts?_start=${start}&_limit=${size}`
    return await fetchData(url)
  }
}
