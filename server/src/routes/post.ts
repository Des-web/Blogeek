import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import PostRepository from '../repositories/PostRepository'

const postRouter = Router()

// @route   GET api/posts
// @desc    List all posts
// @access  Public
postRouter.get('/', async (req, res) => {
  const postRepository = getCustomRepository(PostRepository)
  const posts = await postRepository.find()
  return res.json(posts)
})

export default postRouter
