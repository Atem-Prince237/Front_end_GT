"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
 const handleBookTicket = () => {
    router.push('/pages/bookticket');
  };
  return (
    <div className=" flex flex-col p-8 items-center justify-center h-screen bg-gray-100">
      <h1 className="font-bold text-2xl ">Welcome to go trip app</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
        onClick={handleBookTicket}
      >
        Book tickets
      </button>
    </div>
  );
}
