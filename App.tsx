import React, { useState } from "react";
import GoogleMapComponent from "./GoogleMap";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen p-4">
      {tab === "home" && (
        <>
          <h1>노지어때? 🏕️</h1>
          <GoogleMapComponent />
        </>
      )}
      {tab === "register" && (
        <div>
          <h2>캠핑 장소 등록</h2>
          <input placeholder="장소 이름" />
          <input placeholder="위치" />
          <input placeholder="노지 유형" />
          <textarea placeholder="추가 설명 및 팁" />
          <button>등록하기</button>
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setTab("home")}>🏕️ 홈</button>
        <button onClick={() => setTab("register")}>➕ 등록</button>
      </div>
    </div>
  );
}

export default App;
