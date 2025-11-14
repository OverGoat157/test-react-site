// src/components/TechnologyNotes.jsx
function TechnologyNotes({ notes, onNotesChange, techId }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.9rem',
          fontWeight: '500',
          color: '#4b5563',
        }}
      >
        Мои заметки:
      </label>
      <textarea
        value={notes}
        onChange={(e) => onNotesChange(techId, e.target.value)}
        placeholder="Записывайте сюда важные моменты..."
        rows="3"
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          fontSize: '0.9rem',
          resize: 'vertical',
          backgroundColor: 'white',
          outline: 'none',
          transition: 'border 0.2s ease',
        }}
        onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
      />
      <div
        style={{
          marginTop: '0.5rem',
          fontSize: '0.8rem',
          color: notes.length > 0 ? '#10b981' : '#9ca3af',
          fontWeight: '500',
        }}
      >
        {notes.length > 0 ? `Заметка сохранена (${notes.length} символов)` : 'Добавьте заметку'}
      </div>
    </div>
  );
}

export default TechnologyNotes;