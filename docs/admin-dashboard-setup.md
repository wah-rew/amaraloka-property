# Admin dashboard setup

Phase 1 memakai login password sederhana + cookie session, lalu membaca lead dari Supabase.

## Environment variables

Tambahkan ini di `.env.local` untuk local development dan di Vercel Project Settings untuk production:

```env
NEXT_PUBLIC_SITE_URL=https://amaraloka.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
ADMIN_PASSWORD=choose-a-strong-password
```

## Supabase steps

1. Buka project Supabase.
2. Jalankan SQL di `docs/supabase-phase1.sql`.
3. Salin `Project URL`, `anon public key`, dan `service_role key` ke env vars.
4. Redeploy aplikasi setelah env vars disimpan.

## Routes

- `/admin` for login
- `/admin/leads` for dashboard
- `/api/leads` for public lead capture

## WhatsApp follow-up choice in Phase 1

CTA WhatsApp di dashboard **tidak** membuka chat langsung ke lead.

Sebaliknya, tombol membuka:

```text
https://wa.me/<NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER>?text=...
```

Pesan prefilled berisi detail lead:
- name
- source
- phone
- email
- payment preference
- subject
- message

Ini sengaja dibuat sederhana untuk Phase 1 supaya owner/admin bisa copy, review, lalu lanjut follow-up manual dari nomor WhatsApp internal.

## Notes

- Jika Supabase belum diatur, form API akan mengembalikan error yang jelas tanpa membuat build gagal.
- Jika `ADMIN_PASSWORD` belum diatur, halaman login akan menampilkan status setup.
- Jika `NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER` belum diatur, tombol WhatsApp di dashboard akan nonaktif.
