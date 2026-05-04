"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onLogout() {
    setIsSubmitting(true);

    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={isSubmitting}
      className="px-4 py-2 border border-navy/15 text-navy font-inter text-sm hover:border-brass hover:text-brass disabled:opacity-50 transition-colors"
    >
      {isSubmitting ? "Keluar..." : "Logout"}
    </button>
  );
}
