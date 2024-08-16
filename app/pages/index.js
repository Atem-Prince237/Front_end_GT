// pages/index.js

import { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleTicketTypeChange = (e) => {
    setSelectedTicketType(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTicketCountChange = (e) => {
    setNumTickets(e.target.value);
  };

  const handleBookNow = () => {
    // Implement booking logic here
    console.log('Booking:', {
      ticketType: selectedTicketType,
      date: selectedDate,
      numTickets: numTickets,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-blue-500">Go-Trip</h1>
          <Image src="/logo.png" alt="Go-Trip Logo" width={50} height={50} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Welcome to Go-Trip!</h2>
        <p className="mb-8">
          We are excited to help you plan your next adventure. Book your tickets
          now and get ready to explore the world.
        </p>
        <div className="mb-4">
          <label htmlFor="ticket-type" className="block font-medium mb-2">
            Ticket Type
          </label>
          <select
            id="ticket-type"
            className="border border-gray-300 rounded-md px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedTicketType}
            onChange={handleTicketTypeChange}
          >
            <option value="">Select ticket type</option>
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </div>
        {/* Rest of the form fields */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
      <div className="mt-8">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}