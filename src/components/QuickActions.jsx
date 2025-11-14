// src/components/QuickActions.jsx
import { useState } from 'react';
import Modal from './Modal';

function QuickActions({ onMarkAllCompleted, onResetAll, technologies }) {
  const [showExportModal, setShowExportModal] = useState(false);

  const handleExport = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      technologies: technologies
    };
    const dataStr = JSON.stringify(data, null, 2);
    console.log('Данные для экспорта:', dataStr);
    setShowExportModal(true);
  };

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#4b5563' }}>
        Быстрые действия
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        
        {/* Отметить все как выполненные */}
        <button
          onClick={onMarkAllCompleted}
          className="nav-button"
          style={{ padding: '0.5rem 1rem' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="button-text">Отметить все как выполненные</span>
        </button>

        {/* Сбросить все */}
        <button
          onClick={onResetAll}
          className="nav-button"
          style={{ padding: '0.5rem 1rem' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="button-text">Сбросить все статусы</span>
        </button>

        {/* Экспорт */}
        <button
          onClick={handleExport}
          className="nav-button"
          style={{ padding: '0.5rem 1rem' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="button-text">Экспорт данных</span>
        </button>
      </div>

      {/* Модальное окно экспорта */}
      <Modal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        title="Экспорт данных"
      >
        <div style={{ padding: '1.5rem', textAlign: 'center' }}>
          <svg width="48" height="48" fill="none" stroke="#10b981" viewBox="0 0 24 24" style={{ margin: '0 auto 1rem' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p style={{ margin: '0 0 1rem', color: '#1f2937' }}>
            Данные успешно подготовлены для экспорта!
          </p>
          <p style={{ margin: '0 0 1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
            Проверьте консоль разработчика для просмотра данных.
          </p>
          <button
            onClick={() => setShowExportModal(false)}
            style={{
              padding: '0.5rem 1rem',
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default QuickActions;