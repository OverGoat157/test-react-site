import './TechnologyCard.css';

function TechnologyCard({ title, description, status, onStatusChange }) {
  return (
    <div
      className={`technology-card status-${status}`}
      onClick={onStatusChange}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="status-info">
        <span className="status-text">
          Статус: {status === 'completed' ? 'Изучено' : status === 'in-progress' ? 'В процессе' : 'Не начато'}
        </span>
        {status === 'completed' && <span>Готово</span>}
        {status === 'in-progress' && <span>В процессе</span>}
        {status === 'not-started' && <span>Не начато</span>}
      </div>
    </div>
  );
}

export default TechnologyCard;