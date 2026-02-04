import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import RequestTable from "./components/RequestTable";
import RequestModal from "./components/RequestModal";
import RoomByModal from "./components/RoomByModal";
import DayByModal from "./components/DayByModal";

export default function App() {
  const [requests, setRequests] = useState([]);
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [openRoomModal, setOpenRoomModal] = useState(false);
  const [openDayModal, setOpenDayModal] = useState(false);

  const stats = {
    approved: requests.filter(r => r.status === "approved").length,
    rejected: requests.filter(r => r.status === "rejected").length,
    pending: requests.filter(r => r.status === "pending").length,
    limit: requests.length
  };

  const addRequest = (data) => {
    setRequests([...requests, { ...data, status: "pending" }]);
  };

  return (
    <div className="container">
      <Header onNewRequest={() => setOpenRequestModal(true)} />
      <Stats {...stats} />
      <RequestTable requests={requests} />

      <RequestModal
        open={openRequestModal}
        onClose={() => setOpenRequestModal(false)}
        onRoom={() => {
          setOpenRequestModal(false);
          setOpenRoomModal(true);
        }}
        onDay={() => {
          setOpenRequestModal(false);
          setOpenDayModal(true);
        }}
      />

      <RoomByModal
        open={openRoomModal}
        onClose={() => setOpenRoomModal(false)}
        onConfirm={addRequest}
      />

      <DayByModal
        open={openDayModal}
        onClose={() => setOpenDayModal(false)}
        onConfirm={addRequest}
      />
    </div>
  );
}
