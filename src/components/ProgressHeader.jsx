// src/components/ProgressHeader.jsx
function ProgressHeader({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(t => t.status === 'completed').length;
  const percent = total ? ((completed / total) * 100).toFixed(1) : 0;

  return (
    <div className="progress-header">
      <h2>Прогресс изучения</h2>
      <p>Всего: <strong>{total}</strong></p>
      <p>Изучено: <strong>{completed}</strong></p>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p>{percent}% завершено</p>
    </div>
  );
}

export default ProgressHeader;