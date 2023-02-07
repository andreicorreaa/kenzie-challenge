import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

interface Props {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
}

const AddTask: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | any>();

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        if (formData.name !== '') saveTodo(e, formData);
      }}
    >
      <TextField
        id="name"
        onChange={handleForm}
        fullWidth
        label="Tarefa"
        placeholder="Press enter to add a task"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ListIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default AddTask;
