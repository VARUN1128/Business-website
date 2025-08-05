// src/components/ServiceCard.jsx
// This component renders a service card with title and description

import React from 'react';
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default ServiceCard
