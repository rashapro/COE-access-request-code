export default function RequestModal({ open, onClose, onRoom, onDay }) {
  if (!open) return null;

  return (
    <div className="modal open">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2 className="dialog-head">Choose your option</h2>
        <div className="dialog-buttons">
          <button className="dialog-btn" onClick={onRoom}>
            เลือกจองตามห้องที่ต้องการ
          </button>
          <button className="dialog-btn" onClick={onDay}>
            เลือกจองตามวัน/เวลาที่ต้องการ
          </button>
        </div>
      </div>
    </div>
  );
}
