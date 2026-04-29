"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890";
  const message = encodeURIComponent(
    "Hi Hekfield Rempoa, I'd like to know more about available units."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-13 h-13 bg-sage text-white rounded-full shadow-lg hover:bg-sage/90 transition-all duration-200 hover:shadow-xl"
      style={{ width: 52, height: 52 }}
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
