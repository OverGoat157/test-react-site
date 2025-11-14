// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";

// Компоненты
import Greeting from "./Greeting";
import UserCard from "./UserCard";
import TaskList from "./TaskList";
import Counter from "./Counter";
import RegistrationForm from "./Registration";
import ColorPicker from "./ColorPicker";
import TechnologyCard from "./components/TechnologyCard";
import WindowSizeTracker from "./WindowSizeTracker";
import UserProfile from "./UserProfile";
import ContactForm from "./ContactForm";
import Modal from "./components/Modal";
import UserSettings from "./UserSettings";
import SearchBar from "./components/SearchBar";
import TechnologyNotes from "./components/TechnologyNotes";
import { searchTechnologies } from "./utils/searchTechnologies";
import ProgressDashboard from "./components/ProgressDashboard";
import QuickActions from "./components/QuickActions";

// Иконки
const SunIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m8.485-11.485l-.707.707M5.636 5.636l-.707.707m13.536.707l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

function App() {
  // Загрузка из localStorage
  const [technologies, setTechnologies] = useState(() => {
    const saved = localStorage.getItem("techTrackerData");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "React Components",
            description: "Изучение базовых компонентов",
            status: "completed",
            notes: "",
          },
          {
            id: 2,
            title: "JSX Syntax",
            description: "Освоение синтаксиса JSX",
            status: "in-progress",
            notes: "",
          },
          {
            id: 3,
            title: "useState Hook",
            description: "Работа с состоянием",
            status: "not-started",
            notes: "",
          },
          {
            id: 4,
            title: "Props & State",
            description: "Передача данных",
            status: "not-started",
            notes: "",
          },
        ];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Автосохранение в localStorage
  useEffect(() => {
    localStorage.setItem("techTrackerData", JSON.stringify(technologies));
  }, [technologies]);

  // Загрузка при запуске
  useEffect(() => {
    const saved = localStorage.getItem("techTrackerData");
    if (saved) {
      setTechnologies(JSON.parse(saved));
    }
  }, []);

  // Тёмная тема
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Смена статуса
  const changeStatus = (id) => {
    setTechnologies((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === "not-started"
                  ? "in-progress"
                  : t.status === "in-progress"
                  ? "completed"
                  : "not-started",
            }
          : t
      )
    );
  };

  // Обновление заметок
  const updateTechnologyNotes = (techId, newNotes) => {
    setTechnologies((prevTech) =>
      prevTech.map((tech) =>
        tech.id === techId ? { ...tech, notes: newNotes } : tech
      )
    );
  };

  const filteredTechnologies = searchTechnologies(technologies, searchQuery);

  return (
    <div className="App">
      {/* Навигация */}
      <header className="app-header">
        <div className="container">
          <h1>Практика React</h1>
          <div
            className="nav-controls"
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="nav-button"
            >
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="button-text">Настройки</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="nav-button"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
              <span className="button-text">
                {darkMode ? "Светлая" : "Тёмная"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Практика №19 */}
        <section className="practice-section">
          <div className="card-grid">
            <div className="card">
              <Greeting />
            </div>
            <UserCard
              name="Иван Иванов"
              role="Администратор"
              avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
              isOnline={true}
            />
            <div className="card">
              <TaskList />
            </div>
          </div>
        </section>

        {/* Практика №20 */}
        <section className="practice-section">
          <div className="card-grid">
            <div className="card">
              <Counter />
            </div>
            <div className="card">
              <RegistrationForm />
            </div>
            <div className="card">
              <ColorPicker />
            </div>
          </div>
        </section>

        {/* Трекер технологий */}
        <section className="practice-section">
          <h2>Трекер технологий</h2>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            total={technologies.length}
            found={filteredTechnologies.length}
          />
          <ProgressDashboard />

          <QuickActions
            onMarkAllCompleted={() => {
              setTechnologies((prev) =>
                prev.map((t) => ({ ...t, status: "completed" }))
              );
            }}
            onResetAll={() => {
              setTechnologies((prev) =>
                prev.map((t) => ({ ...t, status: "not-started" }))
              );
            }}
            technologies={technologies}
          />

          <div className="card-grid">
            {filteredTechnologies.length > 0 ? (
              filteredTechnologies.map((t) => (
                <div key={t.id} className="card">
                  <TechnologyCard
                    title={t.title}
                    description={t.description}
                    status={t.status}
                    onStatusChange={() => changeStatus(t.id)}
                  />
                  {/* Заметки */}
                  <TechnologyNotes
                    notes={t.notes}
                    onNotesChange={updateTechnologyNotes}
                    techId={t.id}
                  />
                </div>
              ))
            ) : (
              <div
                className="card"
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
                  Ничего не найдено по запросу "<strong>{searchQuery}</strong>"
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Остальные */}
        <section className="practice-section">
          <WindowSizeTracker />
        </section>
        <section className="practice-section">
          <UserProfile />
        </section>
        <section className="practice-section">
          <ContactForm />
        </section>
      </div>

      {/* Модальные окна */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Настройки пользователя"
      >
        <UserSettings />
      </Modal>
    </div>
  );
}

export default App;
