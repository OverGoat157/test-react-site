// src/components/TechnologyCard.jsx
const statusConfig = {
  'completed': { label: 'Завершено', color: '#10b981', bg: '#ecfdf5' },
  'in-progress': { label: 'В работе', color: '#f59e0b', bg: '#fffbeb' },
  'not-started': { label: 'Начать', color: '#6b7280', bg: '#f3f4f6' },
};

function TechnologyCard({ title, description, status, onStatusChange }) {
  const config = statusConfig[status];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: config.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: config.color,
          }}
        >
          <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
            {status === 'completed' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />}
            {status === 'in-progress' && <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />}
            {status === 'not-started' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V9z" clipRule="evenodd" />}
          </svg>
        </div>
        <button
          onClick={onStatusChange}
          className="btn btn-secondary"
          style={{ fontSize: '0.875rem' }}
        >
          {config.label}
        </button>
      </div>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
        {description}
      </p>
    </div>
  );
}

export default TechnologyCard;