import { PostRepository } from './repositories/postRepository.js'
import { UserRepository } from './repositories/userRepository.js'
import { CommentRepository } from './repositories/commentRepository.js'

export const getPosts = async (start, size) => {
  const posts = await PostRepository.getPosts(start, size)
  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const user = await UserRepository.getUser(post.userId)
      return { ...post, user }
    })
  )

  const postsWithComments = await Promise.all(
    postsWithAuthors.map(async (post) => {
      const comments = await CommentRepository.getComments(post.id)
      return { ...post, comments }
    })
  )

  return postsWithComments
}
