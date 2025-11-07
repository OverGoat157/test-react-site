// src/App.jsx
import { useState } from 'react';
import './App.css';

// Практика №19
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';

// Практика №20
import Counter from './Counter';
import RegistrationForm from './Registration';
import ColorPicker from './ColorPicker';

// Трекер
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const [technologies, setTechnologies] = useState([
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
    { id: 3, title: 'useState Hook', description: 'Работа с состоянием', status: 'not-started' },
    { id: 4, title: 'Props & State', description: 'Передача данных', status: 'not-started' },
  ]);

  const changeStatus = id => {
    setTechnologies(prev =>
      prev.map(t =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === 'not-started'
                  ? 'in-progress'
                  : t.status === 'in-progress'
                  ? 'completed'
                  : 'not-started',
            }
          : t
      )
    );
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Практика React</h1>
      </header>

      {/* №19 */}
      <section className="practice-section">
        <Greeting />
        <UserCard
          name="Иван Иванов"
          role="Администратор"
          avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
          isOnline={true}
        />
        <TaskList />
      </section>

      {/* №20 */}
      <section className="practice-section">
        <Counter />
        <RegistrationForm />
        <ColorPicker />
      </section>

      {/* Трекер */}
      <section className="practice-section">
        <h2>Трекер технологий</h2>
        <ProgressHeader technologies={technologies} />
        <div className="technology-list">
          {technologies.map(t => (
            <TechnologyCard
              key={t.id}
              title={t.title}
              description={t.description}
              status={t.status}
              onStatusChange={() => changeStatus(t.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;