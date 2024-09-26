import { fetchData } from '../services.js'
import { config } from '../../../../config.js'

export const CommentRepository = {
  getComments: async (postId) => {
    const url = `${config.API_URL}/posts/${postId}/comments`
    return await fetchData(url)
  }
}
