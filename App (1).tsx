// Google Maps + 장소 등록 앱 코드 (React + Tailwind)

import React, { useEffect, useRef, useState } from 'react';

function App() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [tab, setTab] = useState('home');
  const [marker, setMarker] = useState(null);
  const [form, setForm] = useState({
    name: '',
    location: '',
    type: '',
    description: '',
  });

  useEffect(() => {
    if (window.google && mapRef.current && !map) {
      const initialMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 36.5, lng: 127.9 },
        zoom: 7,
      });

      // 지도 클릭 시 마커 설정
      initialMap.addListener('click', (e) => {
        const clickedLatLng = e.latLng;

        if (marker) {
          marker.setMap(null);
        }

        const newMarker = new window.google.maps.Marker({
          position: clickedLatLng,
          map: initialMap,
        });

        setMarker(newMarker);
        setForm({ ...form, location: `${clickedLatLng.lat()}, ${clickedLatLng.lng()}` });
      });

      setMap(initialMap);
    }
  }, [map]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-4 pb-24 space-y-6">
        <h1 className="text-2xl font-bold">노지어때? 🌳</h1>

        {tab === 'home' && <div ref={mapRef} className="w-full h-[400px] rounded-lg border" />}

        {tab === 'register' && (
          <div className="space-y-2">
            <h2 className="font-bold text-lg">📍 캠핑 장소 등록</h2>
            <input
              className="border p-2 w-full rounded"
              placeholder="장소 이름"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border p-2 w-full rounded"
              placeholder="위치 (지도에서 선택됨)"
              value={form.location}
              readOnly
            />
            <input
              className="border p-2 w-full rounded"
              placeholder="노지 유형"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            <textarea
              className="border p-2 w-full rounded"
              placeholder="추가 설명 및 팁"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <button className="bg-green-600 text-white w-full py-2 rounded">등록하기</button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 w-full flex justify-around bg-white border-t p-2">
        <button onClick={() => setTab('home')} className="text-sm">🌄 홈</button>
        <button onClick={() => setTab('register')} className="text-sm">➕ 등록</button>
      </div>
    </div>
  );
}

export default App;
