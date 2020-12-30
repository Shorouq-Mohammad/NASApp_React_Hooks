const express = require('express')
const app = express()
const router = express.Router()
const Image = require('../models/Image')

router.get('/images', async (req, res) => { 
    const {id} = req.query
    const images = id ? await Image.findById(id) : await Image.find({})
    res.send(images)
})

router.post('/image', async (req, res) => {
    let result
    try{
        const newImage = new Image(req.body)
        await newImage.save()
        result = "The image was saved"
    }catch(err){
        result = "The image wasn't saved"
    }
    res.send(result)
})

router.delete('/image/:id', async (req, res) => {
    let result
    try {
        await Image.findByIdAndRemove(req.params.id)
        result = "The image was deleted "
    } catch (error) {
        result = "The image wasn't deleted"
    }
    res.send(result)
})

module.exports = router