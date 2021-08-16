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

// @route   POST api/posts
// @desc    Create a post
// @access  Private
postRouter.post('/', async (req, res) => {
  const postRepository = getCustomRepository(PostRepository)
  const { title, content } = req.body
  const newPost = postRepository.create({
    title,
    content
  })
  
  await postRepository.save(newPost)
  return res.json(newPost)
})

export default postRouter
