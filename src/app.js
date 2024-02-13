import { express } from "express";

const app = express();
const PORT = 8080;

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
    res.send('Lista de productos');
});

productsRouter.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Detalles del producto ${productId}`);
});

const cartsRouter = express.Router();

cartsRouter.get('/', (req, res) => {
    res.send('Carrito de compras');
});

cartsRouter.post('/', (req, res) => {
    res.send('Agregar producto al carrito');
});

app.use('/products', productsRouter);
app.use('/carts', cartsRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});