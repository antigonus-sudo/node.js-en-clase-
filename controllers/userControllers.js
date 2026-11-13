const UserService=require('..//services/userService')
const userService=new UserService()

exports.getALLUsers=async(req,res)=>{
    const users =await userService.getALL()
    res.status(200).json(users)
}

exports.getUser=async(req,res)=>{
    const id=req.params.id
    const user= await userService.filterById(id)
    if(!user){
        return res.status(400).json({"menssage ":" Usuariosno encontrado"})
    }
    res.status(200).json(user)
}


// para crear
// entrada = req y salida = res
exports.createUser = async (req,res)=>{
    try {
        let data= req.body // entrada 
        await userService.create(data)
        res.status(201).send('Usuario Registrado')
    } catch (error) {
        res.status(500).json({"error":error.message}) //salida
    }
}
//para actualizar
exports.updataUser=async(req, res)=>{
    let data=req.body
    const id=req.params.id
    const user=await userService.filterById(id)
    if (!user) {
        return res.status(400).json({"message":"Usuario no encontrado"})
    }
    await userService.update(id, data)
    res.status(200).send('se modifico el registro correctamente')
}
//para eliminar 
exports.deleteUser=async(req, res)=>{
    const id=req.params.id
    const user=await userService.filterById(id)
    if (!user) {
        return res.status(400).json({"message":"Usuario no encontrado"})
    }
    await userService.delete(id)
    res.status(200).send('Se elimino el usuario correctamente')
}