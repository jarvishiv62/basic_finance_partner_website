"use client";

import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "919651459870";
    const message = encodeURIComponent(
      "Hello! I'm interested in Upay Bharat services.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></span>
      </button>
    </div>
  );
}
