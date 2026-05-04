"use client";

import { MessageCircle } from "lucide-react";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={PUBLIC_WHATSAPP_LINK}
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
