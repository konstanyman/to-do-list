// Import express
const express = require('express')

// Import tasks-controller
const tasksRoutes = require('../controllers/tasks-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all tasks
// In server.js, tasks route is specified as '/tasks'
// this means that '/all' translates to '/tasks/all'
router.get('/all', tasksRoutes.tasksAll)

// '/create' translates to '/tasks/create'
router.post('/create', tasksRoutes.tasksCreate)

// '/delete' translates to '/tasks/delete'
router.put('/delete', tasksRoutes.tasksDelete)

// '/reset' translates to '/tasks/reset'
router.put('/reset', tasksRoutes.tasksReset)

// Export router
module.exports = router