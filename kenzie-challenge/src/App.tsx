import { CardContent, InputAdornment, TextField } from '@mui/material'
import './App.css'
import Card from '@mui/material/Card'
import ListIcon from '@mui/icons-material/List';

const defaultTasks = [
  {
    task: "Create a new APP",
    done: false
  }
]

function App() {

  return (
    <div className="App">
      <h1>Kenzie</h1>
      <Card sx={{ minWidth: 500, minHeight: 600 }}>
        <CardContent>
          <TextField
            fullWidth
            id="standard-basic"
            label="Tarefa"
            placeholder='Add a task'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ListIcon />
                </InputAdornment>
              ),
            }} />
        </CardContent>
      </Card>
    </div>
  )
}

export default App
