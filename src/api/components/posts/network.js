import express from 'express'
import { getPosts } from './interactors.js'
const router = express.Router()

router.get('/', async (req, res, next) => {
  const { start, size } = req.query
  try {
    const posts = await getPosts(start, size)

    if (!posts.length) {
      return res.status(404).json({ message: 'No posts found' })
    }
    res.status(200).json(posts)
  } catch (error) {
    next(error)
  }
})

export default router
