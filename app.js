const express=require('express')
const app=express()
const path=require('path')
//const userRouter=require('./routers/userRouters')
const connection = require('./database/connection')
const productoRouter=require('./routers/productoRouters')
const proveedorRouter=require('./routers/proveedorRouters')
const categoriaRouter=require('./routers/categoriaRouters')
const ordenRouter=require('./routers/ordenRouters')
const clienteRouter=require('./routers/clienteRouters')
//const authRouter=require('./routers/AuthRouters')
//const dashboardRouter=require('./routers/dashboardRouter')
const sockte=require('socket.io')

const server=require('http').createServer(app)
const io=sockte(server)
require('./socket')(io)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/',(req, res)=>{
    const data = {
        "title": "Titulo de la página",
        "message": "Bienvenido a mi sitio web",
        "showMessage": true,
        "items": [1, 2, 3, 4, 5]
    }

    res.render('index', data)
})

app.get('/view-login', (req, res) => {
    res.render('login') //views/login
})

/*app.get('/', (req, res) => {
    res.send('Servidor creado con Express.js')
})*/

app.use(express.json())
//app.use('/users',userRouter)
app.use('/productos',productoRouter)
app.use('/proveedores', proveedorRouter)
app.use('/categorias', categoriaRouter)
app.use('/ordenes', ordenRouter)
app.use('/clientes', clienteRouter)
//app.use('/auth', authRouter)
//app.use('/dashboard',dashboardRouter)

server.listen(3000,()=>{
    console.log("Aplicacion con express ejecutandose en el puerto 3000")
})