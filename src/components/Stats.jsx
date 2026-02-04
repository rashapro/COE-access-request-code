export default function Stats({ approved, rejected, pending, limit }) {
  return (
    <div className="stats-grid">
      <Stat icon="fa-check-square" label="Approved" value={approved} cls="approved" />
      <Stat icon="fa-times-square" label="Rejected" value={rejected} cls="rejected" />
      <Stat icon="fa-clock" label="Pending" value={pending} cls="pending" />
      <Stat icon="fa-list" label="Booking Limits" value={`${limit} / 3`} cls="limit" />
    </div>
  );
}

function Stat({ icon, label, value, cls }) {
  return (
    <div className={`stat-card ${cls}`}>
      <div className="stat-icon"><i className={`fas ${icon}`}></i></div>
      <div className="stat-label">{label}</div>
      <div className="stat-number">{value}</div>
    </div>
  );
}
