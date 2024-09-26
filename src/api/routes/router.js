import postsRouter from '../components/posts/network.js'

const routes = (app) => {
  app.use('/posts', postsRouter)
}

export default routes
