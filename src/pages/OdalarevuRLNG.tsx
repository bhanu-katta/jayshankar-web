import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop', // Port/ship
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1170&auto=format&fit=crop', // LNG terminal
  'https://plus.unsplash.com/premium_photo-1677535563178-e2e64b12cb6b?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Fertilizer plant
];

const OdalarevuRLNG = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">ODALAREVU RLNG IMPORTS PVT LTD</h1>
      <p className="text-lg text-gray-700 mb-8">
        Jayashankar Group, through Odalarevu RLNG Imports Private Limited (a special purpose vehicle), proposes a world-class project in Andhra Pradesh, India, consisting of a Fertilizer Manufacturing Complex, RLNG supplies, and the development of a Captive Port, with equity investment and funding from global sources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Odalarevu RLNG project" className="rounded-xl shadow-lg w-full h-48 object-cover" />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Strategic Partnerships</h2>
      <p className="text-gray-700 mb-6">
        Entered into a composite agreement for joint development with Millennium Holdings FZE (UAE) and Manafeth Najd, KSA, under the leadership of His Royal Highness Prince Sultan Bin Mishaal Bin Abdulaziz Al Saud, and other global associates.
      </p>
      <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Project Highlights</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li><b>FSRU (Floating Storage & Regassification Unit):</b> Gas handling facilities at the port, with pipelines connecting to GAIL for distribution to high-power industries (cement, ceramic, paper, power, steel, fertilizer, etc.). LNG vessels anchored at the port, re-gasified, and transferred via marine pipelines and STS method.</li>
        <li><b>Fertilizer Complex:</b> New unit on the eastern coast, with project outlay approved by Project Developments India Limited, Ministry of Fertilizers, Government of India. Focus on import substitution products.</li>
        <li><b>Captive Port:</b> Natural draft of 16 meters over 3.5–5 km coastline. 3–5 berths for LNG imports, ship anchoring, and future crude oil imports. Odalarevu coast is historically known for natural ship harbor.</li>
      </ul>
      <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Funding & Approvals</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>Millennium Holdings FZE and Manafeth Najd, KSA, will obtain all clearances for RLNG supplies and business association from authorities.</li>
        <li>Land acquisition and environmental clearance after financial closure and RLNG supply tie-up.</li>
        <li>Composite funding requirement: <b>US$ 4.5 billion (Rs 36,000 crores)</b>, facilitated by a consortium including Crudex International Petroleum Production Limited and government funds from Kuwait and Saudi Arabia.</li>
      </ul>
      <div className="mt-10 text-gray-500 text-sm text-center">
        <span>For more information, contact info@jayashankargroup.com</span>
      </div>
    </div>
  </div>
);

export default OdalarevuRLNG; 