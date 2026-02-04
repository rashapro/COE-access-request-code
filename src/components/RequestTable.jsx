export default function RequestTable({ requests }) {
  return (
    <>
      <div className="section-title">My Requests</div>
      <div className="section">
        <table>
          <thead>
            <tr>
              <th>ประเภทห้อง</th>
              <th>วันที่จอง</th>
              <th>เวลาเริ่ม</th>
              <th>เวลาสิ้นสุด</th>
              <th>รายละเอียดการจอง</th>
              <th>สถานะ</th>
              <th>ผู้ตรวจสอบ</th>
              <th>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>ไม่มีข้อมูล</td>
              </tr>
            ) : (
              requests.map((r, i) => (
                <tr key={i}>
                  <td>{r.room}</td>
                  <td>{r.date}</td>
                  <td>{r.start}</td>
                  <td>{r.end}</td>
                  <td>{r.detail}</td>
                  <td>
                    <span className={`status-badge status-${r.status}`}>
                      {r.status}
                    </span>
                  </td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
