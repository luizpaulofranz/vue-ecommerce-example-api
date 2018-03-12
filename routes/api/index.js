// routes/api/index.js
const express                = require('express');
const router                 = express.Router();

// importamos as controllers que vao tratar nossas rotas
const productController      = require('../../controllers/product')
const manufacturerController = require('../../controllers/manufacturer')

// primeiro parametro eh a rota mapeada, o segundo uma funcao callBack
router.get('/manufacturers', manufacturerController.all);

router.get('/products', productController.all);
// veja que podemos passar parametros na URL
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;