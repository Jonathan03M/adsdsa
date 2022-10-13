const router = require('express').Router()

const {getTask,getTaskById,postTask, putTask, deleteTask} = require('../controllers/task.controllers')

router.get('/task', getTask)
router.get('/task/:taskId', getTaskById)
router.post('/task', postTask)
router.put('/task/:putId', putTask)
router.delete('/task/:deleteId', deleteTask)



module.exports = router