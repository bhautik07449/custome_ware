import { Routes, Route } from 'react-router-dom';

// Add your new page imports here

export default function AppRoutes() {
  return (
    <Routes>
      {/* Add your new routes here */}
      <Route path="*" element={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>Ready — add your new UI</div>} />
    </Routes>
  );
}