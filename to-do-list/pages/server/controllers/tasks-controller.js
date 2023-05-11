// Import database
const knex = require('./../db')

// Retrieve all tasks
exports.tasksAll = async (req, res) => {
  // Get all tasks from database
  knex
    .select('*') // select all records
    .from('tasks') // from 'tasks' table
    .then(userData => {
      // Send tasks extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving tasks: ${err}` })
    })
}

// Create new task
exports.tasksCreate = async (req, res) => {
  // Add new task to database
  knex('tasks')
    .insert({ // insert new record, a task
      'id': req.body.id,
      'task': req.body.task,
      'status': req.body.status
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Task \'${req.body.task}\' created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.task} task: ${err}` })
    })
}

// Toggle status specific task
exports.tasksToggle = async (req, res) => {
  // Find specific task in the database and toggle status
  knex('tasks')
  .where('id', req.body.id) // find correct record based on id
  .update('status', !(req.body.status))
  .then(() => {
    // Send a success message in response
    res.json({ message: `Task ${req.body.task} edited. Status: ${req.body.status}` })
  })
  .catch(err => {
    // Send a error message in response
    res.json({ message: `There was an error editing ${req.body.task} task: ${err}` })
  })
}

// Remove specific task
exports.tasksDelete = async (req, res) => {
  // Find specific task in the database and remove it
  knex('tasks')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Task ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} task: ${err}` })
    })
}

// Remove all tasks on the list
exports.tasksReset = async (req, res) => {
  // Remove all tasks from database
  knex
    .select('*') // select all records
    .from('tasks') // from 'tasks' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Task list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting task list: ${err}.` })
    })
}