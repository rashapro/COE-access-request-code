import { useState } from "react";

export default function DayByModal({ open, onClose, onConfirm }) {
  const [form, setForm] = useState({
    room: "",
    date: "",
    start: "",
    end: "",
    detail: ""
  });

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    onConfirm(form);
    onClose();
  };

  return (
    <div className="modal open">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content form-small">
        <h2>รายละเอียดการจอง (เลือกตามวัน)</h2>
        <form onSubmit={submit}>
          <label>ห้อง
            <input required onChange={e => setForm({ ...form, room: e.target.value })} />
          </label>
          <label>วันที่
            <input type="date" required onChange={e => setForm({ ...form, date: e.target.value })} />
          </label>
          <label>เวลาเริ่ม
            <input type="time" required onChange={e => setForm({ ...form, start: e.target.value })} />
          </label>
          <label>เวลาสิ้นสุด
            <input type="time" required onChange={e => setForm({ ...form, end: e.target.value })} />
          </label>
          <label>รายละเอียด
            <textarea rows="3" onChange={e => setForm({ ...form, detail: e.target.value })}></textarea>
          </label>
          <div className="modal-actions">
            <button className="request-btn">ส่งคำขอ</button>
            <button type="button" className="request-btn cancel" onClick={onClose}>ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
  );
}
