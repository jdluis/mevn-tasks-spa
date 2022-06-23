import { Router } from "express";
import Task from "../models/Task";

const router = Router();


//////////////////////////////////////////////////////
/*||||||||||||||||||||||||||||
----- CRUD ACTUAL-------------

-getAll: Recuperar todas las tareas
-getById: Recuperar una tarea especifica
-post: Postear nuevas tareas
-deleteById: Eliminar tarea especifica
-putById: Actualizar una tarea especifica

----- CRUD ACTUAL -------------
|||||||||||||||||||||||||||||*/
//////////////////////////////////////////////////////

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find()

        if (!tasks) return res.status(404).json({ message: "Task not found" });

        res.send(tasks);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body
        const task = new Task({ title, description })
        await task.save();

        res.send("Task Created: \n " + "Title: " + task.title + ".");
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if (!task) return res.status(404).json({ message: "Task not found" });

        res.send(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.send(task);
    } catch (error) {
        console.error(error)
    }
});

router.put('/tasks/:id', async (req, res) => {
    try {
        const updateTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.json(updateTasks);
    } catch (error) {
        console.error(error)
    }
});


export default router;