"use client";

import { useState } from "react";

type LeadCapturePayload = {
  source: "hekfield" | "contact";
  name: string;
  email?: string;
  phone?: string;
  paymentPreference?: string;
  tierOfInterest?: string;
  subject?: string;
  message?: string;
};

export function useLeadCaptureForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  async function submitLead(payload: LeadCapturePayload) {
    setSubmitError(null);
    setSubmitSuccess(null);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const body = (await response.json().catch(() => null)) as
      | { error?: string; message?: string }
      | null;

    if (!response.ok) {
      const error = body?.error ?? "Terjadi kendala. Silakan coba lagi.";
      setSubmitError(error);
      throw new Error(error);
    }

    setSubmitSuccess(body?.message ?? "Lead berhasil dikirim.");
    return body;
  }

  return {
    submitLead,
    submitError,
    submitSuccess,
    clearMessages() {
      setSubmitError(null);
      setSubmitSuccess(null);
    },
  };
}
