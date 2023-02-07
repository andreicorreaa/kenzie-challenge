import React, { useEffect, useState } from 'react';
import './App.css';
import { addTodo, deleteTodo, getTodos, updateTodo } from './api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => {
        setTodos(todos);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Todo not saved');
        }
        setTodos(data.todos);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated');
        }
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted');
        }
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Kenzie</h1>
      <Card sx={{ minWidth: 500, minHeight: 600, maxHeight: 600 }}>
        <CardContent>
          <AddTask saveTodo={handleSaveTodo}></AddTask>
          <ListTasks
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todos={todos}
          ></ListTasks>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
