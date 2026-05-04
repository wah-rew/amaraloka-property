"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm({
  disabled,
  setupError,
}: {
  disabled: boolean;
  setupError?: string;
}) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(setupError ?? null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (disabled) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setError(payload?.error ?? "Login gagal. Silakan coba lagi.");
        return;
      }

      router.push("/admin/leads");
      router.refresh();
    } catch {
      setError("Tidak dapat menghubungi server.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
          PASSWORD ADMIN
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan password admin"
          disabled={disabled || isSubmitting}
          className="w-full bg-white border border-navy/15 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors disabled:bg-sand/20"
        />
      </div>

      {error && (
        <div className="rounded-sm border border-driftwood/30 bg-driftwood/10 px-4 py-3 font-inter text-sm text-driftwood">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={disabled || isSubmitting}
        className="w-full px-6 py-3 bg-navy text-white font-inter text-sm tracking-wide hover:bg-navyLight disabled:opacity-50 disabled:hover:bg-navy transition-colors duration-200"
      >
        {isSubmitting ? "Masuk..." : "Masuk ke Dashboard"}
      </button>
    </form>
  );
}
