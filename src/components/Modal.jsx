// src/components/Modal.jsx
import { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, children }) {
  // Если модалка закрыта — ничего не рендерим
  if (!isOpen) return null;

  // Закрытие по клику на фон
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Закрытие по клавише Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Добавляем слушатель
    document.addEventListener('keydown', handleEsc);

    // Убираем при размонтировании
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="modal-background"
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <div
        className="modal-window"
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          animation: 'slideUp 0.3s ease-out',
        }}
      >
        {/* Шапка */}
        <div
          className="modal-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#6b7280',
              padding: '0.25rem',
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            ×
          </button>
        </div>

        {/* Контент */}
        <div style={{ padding: '1.5rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;