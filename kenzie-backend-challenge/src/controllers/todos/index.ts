import { type Response, type Request } from 'express';
import { type ITodo } from './../../types/todo';
import Todo from '../../models/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
  const todos: ITodo[] = await Todo.find();
  res.status(200).json({ todos });
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as Pick<ITodo, 'name' | 'status'>;

  const todo: ITodo = new Todo({
    name: body.name,
    status: body.status,
  });

  const newTodo: ITodo = await todo.save();
  const allTodos: ITodo[] = await Todo.find();

  res
    .status(201)
    .json({ message: 'Todo added', todo: newTodo, todos: allTodos });
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
    body,
  } = req;
  const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
    { _id: id },
    body
  );
  const allTodos: ITodo[] = await Todo.find();
  res.status(200).json({
    message: 'Todo updated',
    todo: updateTodo,
    todos: allTodos,
  });
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id);
  const allTodos: ITodo[] = await Todo.find();
  res.status(200).json({
    message: 'Todo deleted',
    todo: deletedTodo,
    todos: allTodos,
  });
};

export { getTodos, addTodo, updateTodo, deleteTodo };
