import { redirect } from "next/navigation";
import AdminLoginForm from "./AdminLoginForm";
import { isAdminAuthenticated, getAdminSetupState } from "../../lib/admin-auth";

export default async function AdminPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/leads");
  }

  const setup = getAdminSetupState();

  return (
    <section className="min-h-screen bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <p className="eyebrow text-brass mb-4 tracking-[0.25em]">ADMIN</p>
          <h1 className="font-playfair text-4xl text-navy mb-3">
            Dashboard Amaraloka
          </h1>
          <p className="font-inter text-sm text-slate leading-relaxed">
            Login sederhana untuk melihat lead masuk dan lanjutkan follow-up via WhatsApp.
          </p>
        </div>

        <div className="border border-navy/10 bg-cream p-8 shadow-sm">
          <AdminLoginForm
            disabled={!setup.isConfigured}
            setupError={
              setup.isConfigured
                ? undefined
                : "ADMIN_PASSWORD belum diatur. Tambahkan dulu di environment Vercel atau file .env.local."
            }
          />
        </div>
      </div>
    </section>
  );
}
