// src/components/ProgressBar.jsx
function ProgressBar({
  progress,
  label = '',
  color = '#4CAF50',
  height = 20,
  showPercentage = true,
  animated = false
}) {
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* Заголовок */}
      {(label || showPercentage) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#374151',
          }}
        >
          {label && <span style={{ fontWeight: '500' }}>{label}</span>}
          {showPercentage && (
            <span style={{ fontWeight: '600', color }}>{normalizedProgress}%</span>
          )}
        </div>
      )}

      {/* Прогресс-бар */}
      <div
        style={{
          width: '100%',
          height: `${height}px`,
          backgroundColor: '#e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${normalizedProgress}%`,
            backgroundColor: color,
            borderRadius: '8px',
            transition: animated ? 'width 0.6s ease-in-out' : 'none',
            position: 'relative',
          }}
        >
          {/* Полоска анимации */}
          {animated && normalizedProgress > 0 && normalizedProgress < 100 && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: 'shimmer 1.5s infinite',
                transform: 'translateX(-100%)',
              }}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;