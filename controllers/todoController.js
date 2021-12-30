const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

/**
 * @desc For create task
 * @route /api/task
 * @success Public
 */

exports.createTodo = asyncHandler(async (req, res) => {
    const {task, active} = req.body
    const todo = await Todo.create({task, active});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task is created succesfully'
    })
})

