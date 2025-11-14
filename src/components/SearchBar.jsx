// src/components/SearchBar.jsx

// Красивая иконка поиска (SVG)
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transition: 'color 0.2s ease' }}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

function SearchBar({ value, onChange, total, found }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Поиск по названию или описанию..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.8rem',
            borderRadius: '12px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#4f46e5';
            e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '0.85rem',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#9ca3af',
          }}
        >
          <SearchIcon />
        </div>
      </div>

      <p style={{
        margin: '0.5rem 0 0',
        color: '#6b7280',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}>
        Найдено: <strong style={{ color: '#4f46e5' }}>{found}</strong> из <strong>{total}</strong>
      </p>
    </div>
  );
}

export default SearchBar;