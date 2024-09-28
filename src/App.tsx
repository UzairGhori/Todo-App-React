import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import './Styles/global.css';
import Header from './Header';

const App: React.FC = () => {
    return <div>
        <Header />
        
        <div className="App">
            <TodoApp />
        </div>
    
    </div>
};

export default App;
