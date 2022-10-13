const task = require('../models/task')
const User = require('../models/user')

ctrlTask = {}

ctrlTask.getTask = async (req, res) => {
    const tarea = await task.find()
    res.json(tarea)
}

ctrlTask.getTaskById = async ( req, res) => {
    const id = await task.findById(req.params.taskId)
    res.status(200).json(id)
}


ctrlTask.postTask = async (req, res) => {
    const {titulo, descripcion} = req.body

    const nuevatarea = new task ({
        titulo,
        descripcion
    })

    try {
        const tarea = await nuevatarea.save()
        return res.json('Tarea guardada correctamente')
    } catch (error) {
        console.log(error)
        
    }
}

ctrlTask.putTask = async (req, res) => {
    const id = req.params.putId;
    const { titulo, descripcion } = req.body;

    if (!id || !descripcion || !titulo) {
        return res.status(400).json({
            msg: 'No viene id en la petición',
        });
    };

    try {
        const tareaActualizada = await Task.findByIdAndUpdate(id, { titulo, descripcion })

        return res.json({
            msg: 'Tarea actualizada correctamente',
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea'
        })
    }
};

ctrlTask.deleteTask = async (req, res) => {
    const id = req.params.deleteId;
    try {
        await task.findByIdAndUpdate(id, {isActive: false})
        res.json('Tarea eliminada correctamente')
    } catch (error) {
        res.status(404).json({
            mssg: 'Tarea no fue eliminada'
        })
    }

};


module.exports = ctrlTask