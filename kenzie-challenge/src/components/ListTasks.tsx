import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const ListTasks: React.FC<Props> = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <List
      sx={{
        width: '100%',
        maxHeight: 500,
        overflow: 'auto',
      }}
    >
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo._id}`;
        return (
          <ListItem
            key={todo._id}
            secondaryAction={
              <IconButton
                onClick={() => {
                  deleteTodo(todo._id);
                }}
                edge="end"
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => {
                updateTodo(todo);
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.status}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={todo._id}
                primary={todo.name}
                className={todo.status ? `line-through` : ''}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListTasks;
