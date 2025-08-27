import { Router } from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from './handlers/product'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware/validatios'


const router = Router()

router.post('/', 
    body('name').notEmpty().withMessage('EL nombre del producto es obligatorio'),
    body('price').notEmpty().withMessage('EL precio del producto es obligatorio')
        .custom(value => value > 0).withMessage('Precio no valido'),
    handleInputErrors,
    createProduct
)

router.get('/',
    getProducts
)

router.get('/:productId',
    param('productId').isInt().withMessage('ID no válido'), 
    handleInputErrors,
    getProductById
)

router.put('/:productId',
    param('productId').isInt().withMessage('ID no válido'),
    body('name').notEmpty().withMessage('EL nombre del producto es obligatorio'),
    body('price').notEmpty().withMessage('EL precio del producto es obligatorio')
        .custom(value => value > 0).withMessage('Precio no valido'),
    body('availability').isBoolean().withMessage('Valor para disponibiliddad no válido'),
    handleInputErrors,
    updateProduct
)

router.patch('/:productId' ,
    param('productId').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:productId', 
    param('productId').isInt().withMessage('ID no válido'),
     handleInputErrors,
     deleteProduct
)

export default router
