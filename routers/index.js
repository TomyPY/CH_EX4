import {Router} from 'express'
import Container from '../database/database_handler.js'

const router = Router()


router.get('/products', (req, res)=>{
    res.send(Container.getAll())
})

router.get('/products/:id', (req, res)=>{
    
    let product = Container.getById(req.params.id)
    
    if(product == undefined){
        res.send("The product doesn't exists")
    }

    res.send(product)
})

router.post('/products', async (req, res)=>{

    let product = req.body

    console.log(product)

    let productSaved= await Container.save(product)

    res.send(productSaved)    
 
})

router.put('/products/:id', async (req, res)=>{

    let product = await Container.updateById(req.params.id, req.query)

    console.log(product)

    if(product == undefined){
       res.json({'error':"Product doesn't exists"}) 
    }

    

    res.send(product)

})

router.delete('/products/:id', async (req, res)=>{

    let product = await Container.deleteById(req.params.id)

    if (product == undefined){
        res.send({'error':"Product doesn't exists"}) 
    }

    res.send(product)

})

export default router