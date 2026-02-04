export default function Header({ onNewRequest }) {
  return (
    <div className="header">
      <h1>Room Access Control</h1>
      <button className="request-btn" onClick={onNewRequest}>
        <i className="fas fa-plus"></i> ส่งคำขอใหม่
      </button>
    </div>
  );
}
