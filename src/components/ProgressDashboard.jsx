// src/components/ProgressDashboard.jsx
import ProgressBar from './ProgressBar';
import './ProgressDashboard.css';

function ProgressDashboard() {
  const overallProgress = 65;
  const frontendProgress = 80;
  const backendProgress = 50;
  const databaseProgress = 30;
  const weeklyProgress = [90, 75, 60, 45, 30, 15];

  return (
    <div className="progress-dashboard">
      <h2>Мой прогресс в изучении</h2>

      {/* Основной */}
      <ProgressBar
        progress={overallProgress}
        label="Общий прогресс"
        color="#8b5cf6"
        animated={true}
      />

      {/* Фронтенд */}
      <ProgressBar
        progress={frontendProgress}
        label="Фронтенд"
        color="#10b981"
        height={16}
      />

      {/* Бэкенд */}
      <ProgressBar
        progress={backendProgress}
        label="Бэкенд"
        color="#f59e0b"
        showPercentage={false}
      />

      {/* БД */}
      <ProgressBar
        progress={databaseProgress}
        label="Базы данных"
        color="#ef4444"
        height={24}
        animated={true}
      />

      {/* Прогресс по неделям */}
      <div className="weekly-progress">
        <h3>Прогресс по неделям:</h3>
        <div className="weekly-bars">
          {weeklyProgress.map((progress, index) => (
            <div key={index} className="week-item">
              <div className="week-label">Неделя {index + 1}</div>
              <div style={{ flex: 1 }}>
                <ProgressBar
                  progress={progress}
                  color={`hsl(${(index * 15) % 360}, 70%, 50%)`}
                  height={12}
                  showPercentage={false}
                />
              </div>
              <div className="week-percentage">{progress}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;