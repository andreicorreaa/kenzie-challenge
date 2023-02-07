interface ITodo {
  _id: string;
  name: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todos: ITodo[];
}

interface ApiDataType {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
}
