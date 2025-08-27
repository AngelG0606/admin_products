import  type {Request, Response} from 'express'
import Product from '../models/Product'


export const createProduct = async(req :  Request, res : Response) => {
    const product = new Product(req.body)
    await product.save()

    res.json({
        data : product
    })
}

export const getProducts = async(req : Request, res : Response) => {
    try {
        const products = await Product.findAll({
            order : [
                ['id', 'DESC']
            ]
        })

        res.json({data : products})  
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Hubo un error'})
    }
}

export const getProductById = async (req : Request, res : Response) => {
    try {
        const { productId } = req.params
        const product = await Product.findByPk(productId)
        if(!product) {
            const error = new Error('Producto no encontrado')
            res.status(404).json({error : error.message})
            return
        }
        res.json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Hubo un error'})
    }
}

export const updateProduct = async (req : Request, res : Response) => {
    try {
        const { productId } = req.params
        const product = await Product.findByPk(productId)
        if(!product) {
            const error = new Error('Producto no encontrado')
            res.status(404).json({error : error.message})
            return
        }

        //Actualizar
        await product.update(req.body)
        await product.save()

    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Hubo un error'})
    }
}

export const updateAvailability = async (req : Request, res : Response) => {
    try {
        const { productId } = req.params
        const product = await Product.findByPk(productId)
        if(!product) {
            const error = new Error('Producto no encontrado')
            res.status(404).json({error : error.message})
            return
        }

        //Actualizar
        product.availability = !product.dataValues.availability
        await product.save()

    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Hubo un error'})
    }


}

export const deleteProduct = async (req : Request, res : Response) => {
    try {
        const { productId } = req.params
        const product = await Product.findByPk(productId)
        if(!product) {
            const error = new Error('Producto no encontrado')
            res.status(404).json({error : error.message})
            return
        }
        //Eliminar
        await product.destroy()
        res.json({data : 'Producto Eliminado'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Hubo un error'})
    }
}