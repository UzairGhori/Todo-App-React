import React, { useState } from 'react';
import './TodoApp.css';

interface Todo {
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>('');
    const [operation, setOperation] = useState<string | null>(null);
    const [selectedTodo, setSelectedTodo] = useState<string | null>(null);

    const handleAddTask = () => {
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
        setOperation(null);
    };

    const handleUpdateTask = () => {
        if (selectedTodo) {
            setTodos(todos.map(todo => todo.text === selectedTodo ? { ...todo, text: input } : todo));
            setInput('');
            setSelectedTodo(null);
            setOperation(null);
        }
    };

    const handleDeleteTask = () => {
        if (selectedTodo) {
            setTodos(todos.filter(todo => todo.text !== selectedTodo));
            setSelectedTodo(null);
            setOperation(null);
        }
    };

    const renderOperation = () => {
        switch (operation) {
            case 'Add Task':
                return (
                    <div className="input">
                        <input
                        
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Add new task"
                        />
                        <button onClick={handleAddTask}>Add</button>
                    </div>
                );
            case 'Update Task':
                return (
                    <div className="input">
                        <select onChange={(e) => setSelectedTodo(e.target.value)} value={selectedTodo || ''}>
                            <option value="" disabled>Select task to update</option>
                            {todos.map(todo => (
                                <option key={todo.text} value={todo.text}>{todo.text}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Update task"
                        />
                        <button onClick={handleUpdateTask}>Update</button>
                    </div>
                );
            case 'Delete Task':
                return (
                    <div className="input">
                        <select onChange={(e) => setSelectedTodo(e.target.value)} value={selectedTodo || ''}>
                            <option value="" disabled>Select task to delete</option>
                            {todos.map(todo => (
                                <option key={todo.text} value={todo.text}>{todo.text}</option>
                            ))}
                        </select>
                        <button onClick={handleDeleteTask}>Delete</button>
                    </div>
                );
            case 'View List':
                return (
                    <div className="todo-list">
                        <h3>Todo List</h3>
                        <ul>
                            {todos.map(todo => (
                                <li key={todo.text} className={todo.completed ? 'completed' : ''}>
                                    <i className="fas fa-check-circle"></i>
                                    {todo.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="todo-app">
            <img src="https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png" alt="Todo App" className="todo-app-image" />
            <h1>Todo App</h1>
            <div className="operations">
                <button onClick={() => setOperation('Add Task')}>Add Task</button>
                <button onClick={() => setOperation('Update Task')}>Update Task</button>
                <button onClick={() => setOperation('View List')}>View List</button>
                <button onClick={() => setOperation('Delete Task')}>Delete Task</button>
            </div>
            {renderOperation()}
        </div>
    );
};

export default TodoApp;
