import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

// TodoInputForm Component
function TodoInputForm({ onAddTodo }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      onAddTodo({ name, priority });
      setName('');
      setPriority('Low');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}
    >
      <TextField
        label="Todo Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          labelId="priority-label"
          id="priority-select"
          value={priority}
          label="Priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit" sx={{ flexShrink: 0 }}>
        Add Todo
      </Button>
    </Box>
  );
}

// TodoItem Component
function TodoItem({ todo, onToggleComplete }) {
  return (
    <ListItem
      disablePadding
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        mb: 1,
        pr: 2, // Padding right for the checkbox
        bgcolor: 'background.paper',
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            name={`todo-${todo.id}`}
            color="primary"
          />
        }
        label={
          <ListItemText
            primary={todo.name}
            secondary={`Priority: ${todo.priority}`}
            sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
        }
        sx={{ flexGrow: 1, my: 0 }} // Remove vertical margin to align text better
      />
    </ListItem>
  );
}

// TodoList Component
function TodoList({ todos, onToggleComplete }) {
  return (
    <List sx={{ width: '100%' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} />
      ))}
    </List>
  );
}

// App Component (Main application)
function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTodo = ({ name, priority }) => {
    setTodos((prevTodos) => [...prevTodos, { id: nextId, name, priority, completed: false }]);
    setNextId((prevId) => prevId + 1);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Simple To-Do List
      </Typography>
      <TodoInputForm onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <Typography variant="body1" align="center" color="textSecondary">
          No tasks added yet. Start by adding a new todo!
        </Typography>
      ) : (
        <TodoList todos={todos} onToggleComplete={toggleComplete} />
      )}
    </Container>
  );
}

export default App;
