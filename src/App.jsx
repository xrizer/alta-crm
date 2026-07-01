import React, { useState } from "react";
import {
  Home,
  BarChart2,
  PieChart,
  ClipboardList,
  Target,
  User,
  Building2,
  Briefcase,
  TrendingUp,
  FileText,
  Megaphone,
  CheckSquare,
  Calendar,
  Phone,
  Search,
  LogOut,
  Mail,
  Lock,
  Download,
  Eye,
} from "lucide-react";

const ORANGE = "#ff7a1a";
const ORANGE_DARK = "#e8630a";
const ORANGE_LIGHT = "#fff1e6";
const ORANGE_PALE = "#ffe4cc";
const BORDER = "#f0dfc8";
const TEXT_DARK = "#2c2013";
const TEXT_MID = "#6b5c4c";

/* ---------------------------------------------------------- */
/* Sample data                                                 */
/* ---------------------------------------------------------- */

const tugasList = [
  { subjek: "Complete CRM Getting Started steps", tanggal: "01/07/2026", status: "Completed" },
  { subjek: "Register for upcoming CRM Webinars", tanggal: "01/07/2026", status: "Not Started" },
  { subjek: "Complete CRM Getting Started steps", tanggal: "04/07/2026", status: "Completed" },
  { subjek: "Refer CRM Videos", tanggal: "03/07/2026", status: "In Progress" },
  { subjek: "Competitor Comparison Document", tanggal: "29/06/2026", status: "Not Started" },
  { subjek: "Get Approval from Manager", tanggal: "30/06/2026", status: "Not Started" },
];

const pertemuanList = [
  { titel: "Demo", dari: "01/07/2026 09:46 PM", kepada: "01/07/2026 10:46 PM" },
  { titel: "Webinar", dari: "01/07/2026 11:46 PM", kepada: "02/07/2026 12:46 AM" },
  { titel: "TradeShow", dari: "02/07/2026", kepada: "02/07/2026" },
  { titel: "Webinar", dari: "01/07/2026 10:46 PM", kepada: "02/07/2026 01:46 AM" },
  { titel: "Seminar", dari: "01/07/2026 09:46 PM", kepada: "01/07/2026 11:46 PM" },
  { titel: "Attend Customer Conference", dari: "01/07/2026", kepada: "01/07/2026" },
];

const panggilanList = [
  { subjek: "Follow up quotation", kontak: "Rina Wijaya", tipe: "Outbound", tanggal: "01/07/2026 10:00", status: "Completed" },
  { subjek: "Onboarding call", kontak: "Budi Santoso", tipe: "Inbound", tanggal: "01/07/2026 13:30", status: "Scheduled" },
  { subjek: "Renewal discussion", kontak: "Sari Dewi", tipe: "Outbound", tanggal: "30/06/2026 09:15", status: "Completed" },
  { subjek: "Support escalation", kontak: "Andi Prasetyo", tipe: "Inbound", tanggal: "29/06/2026 15:45", status: "Missed" },
  { subjek: "Pricing negotiation", kontak: "Maya Putri", tipe: "Outbound", tanggal: "28/06/2026 11:00", status: "Completed" },
];

const prospekList = [
  { nama: "Hendra Kusuma", perusahaan: "PT Nusantara Digital", sumber: "Website", status: "Baru", nilai: "Rp 45.000.000" },
  { nama: "Lestari Wulandari", perusahaan: "CV Cahaya Abadi", sumber: "Referral", status: "Dihubungi", nilai: "Rp 20.000.000" },
  { nama: "Fajar Nugroho", perusahaan: "PT Bintang Timur", sumber: "Pameran", status: "Kualifikasi", nilai: "Rp 78.500.000" },
  { nama: "Dewi Anggraini", perusahaan: "PT Sumber Makmur", sumber: "Iklan", status: "Baru", nilai: "Rp 15.000.000" },
  { nama: "Rio Saputra", perusahaan: "CV Karya Mandiri", sumber: "Website", status: "Tidak Layak", nilai: "Rp 8.000.000" },
  { nama: "Nina Kartika", perusahaan: "PT Teknologi Jaya", sumber: "Referral", status: "Kualifikasi", nilai: "Rp 92.000.000" },
  { nama: "Agus Setiawan", perusahaan: "PT Global Solusi", sumber: "Pameran", status: "Dihubungi", nilai: "Rp 33.200.000" },
  { nama: "Putri Ramadhani", perusahaan: "CV Sinar Harapan", sumber: "Iklan", status: "Baru", nilai: "Rp 12.750.000" },
  { nama: "Yusuf Hidayat", perusahaan: "PT Andalan Prima", sumber: "Website", status: "Kualifikasi", nilai: "Rp 61.000.000" },
  { nama: "Citra Melati", perusahaan: "PT Mitra Sejahtera", sumber: "Referral", status: "Dihubungi", nilai: "Rp 27.400.000" },
];

const kontakList = [
  { nama: "Rina Wijaya", email: "rina.wijaya@nusadigital.co.id", telepon: "0812-3456-7890", perusahaan: "PT Nusantara Digital", jabatan: "Procurement Manager" },
  { nama: "Budi Santoso", email: "budi.s@cahayaabadi.com", telepon: "0813-2233-4455", perusahaan: "CV Cahaya Abadi", jabatan: "Owner" },
  { nama: "Sari Dewi", email: "sari.dewi@bintangtimur.co.id", telepon: "0821-9988-7766", perusahaan: "PT Bintang Timur", jabatan: "IT Manager" },
  { nama: "Andi Prasetyo", email: "andi.p@sumbermakmur.id", telepon: "0857-1122-3344", perusahaan: "PT Sumber Makmur", jabatan: "Finance Director" },
  { nama: "Maya Putri", email: "maya.putri@karyamandiri.co.id", telepon: "0878-5566-7788", perusahaan: "CV Karya Mandiri", jabatan: "Operations Head" },
  { nama: "Doni Firmansyah", email: "doni.f@teknologijaya.com", telepon: "0811-4433-2211", perusahaan: "PT Teknologi Jaya", jabatan: "CTO" },
  { nama: "Wulan Sari", email: "wulan.sari@globalsolusi.id", telepon: "0822-6677-8899", perusahaan: "PT Global Solusi", jabatan: "Marketing Manager" },
];

const akunList = [
  { nama: "PT Nusantara Digital", industri: "Teknologi", kota: "Jakarta", pemilik: "Aqshol Afifi", omzet: "Rp 5.2 M" },
  { nama: "CV Cahaya Abadi", industri: "Retail", kota: "Bandung", pemilik: "Aqshol Afifi", omzet: "Rp 1.8 M" },
  { nama: "PT Bintang Timur", industri: "Manufaktur", kota: "Surabaya", pemilik: "Sinta Ayu", omzet: "Rp 12.4 M" },
  { nama: "PT Sumber Makmur", industri: "Logistik", kota: "Semarang", pemilik: "Sinta Ayu", omzet: "Rp 3.6 M" },
  { nama: "CV Karya Mandiri", industri: "Konstruksi", kota: "Medan", pemilik: "Aqshol Afifi", omzet: "Rp 900 Jt" },
  { nama: "PT Teknologi Jaya", industri: "Teknologi", kota: "Jakarta", pemilik: "Rian Hidayat", omzet: "Rp 8.9 M" },
];

const transaksiList = [
  { nama: "Implementasi ERP - Nusantara Digital", tahap: "Negosiasi", nilai: "Rp 450.000.000", tutup: "15/07/2026" },
  { nama: "Lisensi Software - Cahaya Abadi", tahap: "Proposal", nilai: "Rp 85.000.000", tutup: "20/07/2026" },
  { nama: "Konsultasi IT - Bintang Timur", tahap: "Kualifikasi", nilai: "Rp 220.000.000", tutup: "05/08/2026" },
  { nama: "Upgrade Infrastruktur - Sumber Makmur", tahap: "Menang", nilai: "Rp 610.000.000", tutup: "28/06/2026" },
  { nama: "Paket Cloud - Karya Mandiri", tahap: "Negosiasi", nilai: "Rp 130.000.000", tutup: "12/07/2026" },
  { nama: "Migrasi Data - Teknologi Jaya", tahap: "Kalah", nilai: "Rp 95.000.000", tutup: "18/06/2026" },
  { nama: "Support Tahunan - Global Solusi", tahap: "Proposal", nilai: "Rp 60.000.000", tutup: "25/07/2026" },
];

const perkiraanList = [
  { bulan: "Juni 2026", target: "Rp 800.000.000", tercapai: "Rp 610.000.000", persen: 76 },
  { bulan: "Juli 2026", target: "Rp 950.000.000", tercapai: "Rp 285.000.000", persen: 30 },
  { bulan: "Agustus 2026", target: "Rp 1.000.000.000", tercapai: "Rp 0", persen: 0 },
];

const dokumenList = [
  { nama: "Proposal ERP Nusantara Digital.pdf", tipe: "PDF", ukuran: "2.4 MB", diubah: "30/06/2026" },
  { nama: "Kontrak Cahaya Abadi.docx", tipe: "DOCX", ukuran: "540 KB", diubah: "29/06/2026" },
  { nama: "Perbandingan Kompetitor.xlsx", tipe: "XLSX", ukuran: "1.1 MB", diubah: "28/06/2026" },
  { nama: "Deck Presentasi Q3.pptx", tipe: "PPTX", ukuran: "6.7 MB", diubah: "26/06/2026" },
  { nama: "SOP Onboarding Klien.pdf", tipe: "PDF", ukuran: "980 KB", diubah: "20/06/2026" },
];

const kampanyeList = [
  { nama: "Promo Akhir Tahun Fiskal", tipe: "Email", status: "Berjalan", prospek: 128, anggaran: "Rp 15.000.000" },
  { nama: "Webinar Transformasi Digital", tipe: "Webinar", status: "Selesai", prospek: 64, anggaran: "Rp 8.000.000" },
  { nama: "Iklan LinkedIn B2B", tipe: "Sosial Media", status: "Berjalan", prospek: 91, anggaran: "Rp 22.000.000" },
  { nama: "Pameran Tech Expo Jakarta", tipe: "Event", status: "Direncanakan", prospek: 0, anggaran: "Rp 35.000.000" },
];

const laporanList = [
  { nama: "Laporan Penjualan Bulanan", kategori: "Penjualan", terakhir: "01/07/2026" },
  { nama: "Kinerja Prospek per Sumber", kategori: "Prospek", terakhir: "30/06/2026" },
  { nama: "Analisis Kampanye Pemasaran", kategori: "Kampanye", terakhir: "28/06/2026" },
  { nama: "Ringkasan Aktivitas Tim", kategori: "Aktivitas", terakhir: "27/06/2026" },
  { nama: "Perkiraan Pendapatan Q3", kategori: "Perkiraan", terakhir: "25/06/2026" },
];

const permintaanList = [
  { subjek: "Tambah field custom di modul Transaksi", tipe: "Peningkatan", status: "Menunggu", tanggal: "29/06/2026" },
  { subjek: "Perbaikan bug ekspor laporan", tipe: "Bug", status: "Dikerjakan", tanggal: "27/06/2026" },
  { subjek: "Integrasi WhatsApp Business", tipe: "Fitur Baru", status: "Menunggu", tanggal: "24/06/2026" },
  { subjek: "Akses role baru untuk tim Finance", tipe: "Akses", status: "Selesai", tanggal: "18/06/2026" },
];

const statCards = [
  { label: "Transaksi Terbuka Saya", value: 0 },
  { label: "Transaksi Saya yang Tertinggal", value: 1 },
  { label: "Panggilan Hari ini Saya", value: 2 },
  { label: "Prospek Saya", value: 10 },
];

const analitikStats = [
  { label: "Total Prospek", value: "312", change: "+12% bulan ini" },
  { label: "Nilai Pipeline", value: "Rp 2.1 M", change: "+8% bulan ini" },
  { label: "Rasio Konversi", value: "18%", change: "-2% bulan ini" },
  { label: "Rata-rata Siklus Penjualan", value: "24 hari", change: "-3 hari" },
];

const analitikSumber = [
  { sumber: "Website", jumlah: 118, persen: 38 },
  { sumber: "Referral", jumlah: 84, persen: 27 },
  { sumber: "Pameran", jumlah: 62, persen: 20 },
  { sumber: "Iklan", jumlah: 48, persen: 15 },
];

/* ---------------------------------------------------------- */
/* Nav config                                                   */
/* ---------------------------------------------------------- */

const navMain = [
  { icon: Home, label: "Beranda" },
  { icon: BarChart2, label: "Laporan" },
  { icon: PieChart, label: "Analitik" },
  { icon: ClipboardList, label: "Permintaan Saya" },
];

const navPenjualan = [
  { icon: Target, label: "Prospek" },
  { icon: User, label: "Kontak" },
  { icon: Building2, label: "Akun" },
  { icon: Briefcase, label: "Transaksi" },
  { icon: TrendingUp, label: "Perkiraan" },
  { icon: FileText, label: "Dokumen" },
  { icon: Megaphone, label: "Kampanye" },
];

const navAktivitas = [
  { icon: CheckSquare, label: "Tugas" },
  { icon: Calendar, label: "Pertemuan" },
  { icon: Phone, label: "Panggilan" },
];

/* ---------------------------------------------------------- */
/* Shared UI pieces                                             */
/* ---------------------------------------------------------- */

const badgeColors = {
  Completed: { bg: "#e2f6e5", color: "#28864a" },
  Selesai: { bg: "#e2f6e5", color: "#28864a" },
  Menang: { bg: "#e2f6e5", color: "#28864a" },
  "Not Started": { bg: "#fde8e8", color: "#c23b3b" },
  Menunggu: { bg: "#fde8e8", color: "#c23b3b" },
  Kalah: { bg: "#fde8e8", color: "#c23b3b" },
  Missed: { bg: "#fde8e8", color: "#c23b3b" },
  "Tidak Layak": { bg: "#fde8e8", color: "#c23b3b" },
  "In Progress": { bg: ORANGE_PALE, color: ORANGE_DARK },
  Dikerjakan: { bg: ORANGE_PALE, color: ORANGE_DARK },
  Berjalan: { bg: ORANGE_PALE, color: ORANGE_DARK },
  Negosiasi: { bg: ORANGE_PALE, color: ORANGE_DARK },
  Scheduled: { bg: "#e6f1fb", color: "#185fa5" },
  Baru: { bg: "#e6f1fb", color: "#185fa5" },
  Direncanakan: { bg: "#e6f1fb", color: "#185fa5" },
  Dihubungi: { bg: "#faeeda", color: "#854f0b" },
  Proposal: { bg: "#faeeda", color: "#854f0b" },
  Kualifikasi: { bg: "#eeedfe", color: "#3c3489" },
};

function StatusBadge({ status }) {
  const s = badgeColors[status] || { bg: "#f1efe8", color: "#5f5e5a" };
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        background: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {status}
    </span>
  );
}

const STATUS_COLUMNS = new Set([
  "status",
  "tahap",
]);

function DataTable({ columns, rows }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  textAlign: "left",
                  color: TEXT_MID,
                  fontWeight: 600,
                  padding: "8px 10px",
                  borderBottom: `2px solid ${ORANGE_PALE}`,
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    padding: "10px 10px",
                    borderBottom: i === rows.length - 1 ? "none" : `1px solid ${BORDER}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {STATUS_COLUMNS.has(col.key) ? <StatusBadge status={row[col.key]} /> : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function PageTitle({ title, subtitle, actionLabel }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
      }}
    >
      <div>
        <h2 style={{ fontSize: 18, margin: 0, marginBottom: subtitle ? 4 : 0 }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 13, color: TEXT_MID, margin: 0 }}>{subtitle}</p>}
      </div>
      {actionLabel && (
        <button
          style={{
            background: ORANGE,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "9px 16px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + {actionLabel}
        </button>
      )}
    </div>
  );
}

/* ---------------------------------------------------------- */
/* Pages                                                        */
/* ---------------------------------------------------------- */

function BerandaPage({ userName }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: `linear-gradient(135deg, ${ORANGE_LIGHT}, #fff)`,
          border: `1px solid ${ORANGE_PALE}`,
          padding: "18px 22px",
          borderRadius: 14,
          marginBottom: 22,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: ORANGE,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Building2 size={22} />
        </div>
        <h1 style={{ fontSize: 19, margin: 0 }}>Selamat Datang, {userName}</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 24 }}>
        {statCards.map((c) => (
          <Card key={c.label} style={{ borderTop: `4px solid ${ORANGE}` }}>
            <div style={{ fontSize: 13, color: TEXT_MID, marginBottom: 10 }}>{c.label}</div>
            <div style={{ fontSize: 30, fontWeight: 700, color: ORANGE_DARK }}>{c.value}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card>
          <h3 style={{ fontSize: 16, marginBottom: 14 }}>Tugas Terbuka Saya</h3>
          <DataTable
            columns={[
              { key: "subjek", label: "Subjek" },
              { key: "tanggal", label: "Tanggal Jatuh Tempo" },
              { key: "status", label: "Status" },
            ]}
            rows={tugasList}
          />
        </Card>
        <Card>
          <h3 style={{ fontSize: 16, marginBottom: 14 }}>Pertemuan Saya</h3>
          <DataTable
            columns={[
              { key: "titel", label: "Titel" },
              { key: "dari", label: "Dari" },
              { key: "kepada", label: "Kepada" },
            ]}
            rows={pertemuanList}
          />
        </Card>
      </div>
    </div>
  );
}

function LaporanPage() {
  return (
    <div>
      <PageTitle title="Laporan" subtitle="Ringkasan laporan yang tersedia untuk tim Anda" actionLabel="Laporan Baru" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {laporanList.map((r) => (
          <Card key={r.nama} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>{r.nama}</div>
              <div style={{ fontSize: 12, color: TEXT_MID }}>
                {r.kategori} &middot; diperbarui {r.terakhir}
              </div>
            </div>
            <Eye size={18} color={ORANGE_DARK} />
          </Card>
        ))}
      </div>
    </div>
  );
}

function AnalitikPage() {
  return (
    <div>
      <PageTitle title="Analitik" subtitle="Performa penjualan dan prospek secara keseluruhan" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 24 }}>
        {analitikStats.map((s) => (
          <Card key={s.label} style={{ borderTop: `4px solid ${ORANGE}` }}>
            <div style={{ fontSize: 13, color: TEXT_MID, marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: ORANGE_DARK, marginBottom: 6 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: TEXT_MID }}>{s.change}</div>
          </Card>
        ))}
      </div>
      <Card>
        <h3 style={{ fontSize: 16, marginBottom: 16 }}>Prospek berdasarkan Sumber</h3>
        {analitikSumber.map((s) => (
          <div key={s.sumber} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
              <span>{s.sumber}</span>
              <span style={{ color: TEXT_MID }}>{s.jumlah} prospek</span>
            </div>
            <div style={{ background: ORANGE_LIGHT, borderRadius: 6, height: 8, overflow: "hidden" }}>
              <div style={{ width: `${s.persen}%`, background: ORANGE, height: "100%", borderRadius: 6 }} />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function PermintaanPage() {
  return (
    <div>
      <PageTitle title="Permintaan Saya" subtitle="Daftar permintaan yang telah Anda ajukan" actionLabel="Permintaan Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "subjek", label: "Subjek" },
            { key: "tipe", label: "Tipe" },
            { key: "status", label: "Status" },
            { key: "tanggal", label: "Tanggal" },
          ]}
          rows={permintaanList}
        />
      </Card>
    </div>
  );
}

function ProspekPage() {
  return (
    <div>
      <PageTitle title="Prospek" subtitle={`${prospekList.length} prospek aktif`} actionLabel="Prospek Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "nama", label: "Nama" },
            { key: "perusahaan", label: "Perusahaan" },
            { key: "sumber", label: "Sumber" },
            { key: "status", label: "Status" },
            { key: "nilai", label: "Estimasi Nilai" },
          ]}
          rows={prospekList}
        />
      </Card>
    </div>
  );
}

function KontakPage() {
  return (
    <div>
      <PageTitle title="Kontak" subtitle={`${kontakList.length} kontak tersimpan`} actionLabel="Kontak Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "nama", label: "Nama" },
            { key: "email", label: "Email" },
            { key: "telepon", label: "Telepon" },
            { key: "perusahaan", label: "Perusahaan" },
            { key: "jabatan", label: "Jabatan" },
          ]}
          rows={kontakList}
        />
      </Card>
    </div>
  );
}

function AkunPage() {
  return (
    <div>
      <PageTitle title="Akun" subtitle={`${akunList.length} akun perusahaan`} actionLabel="Akun Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "nama", label: "Nama Perusahaan" },
            { key: "industri", label: "Industri" },
            { key: "kota", label: "Kota" },
            { key: "pemilik", label: "Pemilik Akun" },
            { key: "omzet", label: "Omzet Tahunan" },
          ]}
          rows={akunList}
        />
      </Card>
    </div>
  );
}

function TransaksiPage() {
  return (
    <div>
      <PageTitle title="Transaksi" subtitle={`${transaksiList.length} transaksi dalam pipeline`} actionLabel="Transaksi Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "nama", label: "Nama Transaksi" },
            { key: "tahap", label: "Tahap" },
            { key: "nilai", label: "Nilai" },
            { key: "tutup", label: "Perkiraan Tutup" },
          ]}
          rows={transaksiList}
        />
      </Card>
    </div>
  );
}

function PerkiraanPage() {
  return (
    <div>
      <PageTitle title="Perkiraan" subtitle="Target vs pencapaian per bulan" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {perkiraanList.map((p) => (
          <Card key={p.bulan}>
            <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 10 }}>{p.bulan}</div>
            <div style={{ fontSize: 12, color: TEXT_MID, marginBottom: 4 }}>Target: {p.target}</div>
            <div style={{ fontSize: 12, color: TEXT_MID, marginBottom: 10 }}>Tercapai: {p.tercapai}</div>
            <div style={{ background: ORANGE_LIGHT, borderRadius: 6, height: 8, overflow: "hidden", marginBottom: 6 }}>
              <div style={{ width: `${p.persen}%`, background: ORANGE, height: "100%", borderRadius: 6 }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: ORANGE_DARK }}>{p.persen}% tercapai</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function DokumenPage() {
  return (
    <div>
      <PageTitle title="Dokumen" subtitle={`${dokumenList.length} dokumen tersimpan`} actionLabel="Unggah Dokumen" />
      <Card>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", color: TEXT_MID, fontWeight: 600, padding: "8px 10px", borderBottom: `2px solid ${ORANGE_PALE}` }}>Nama File</th>
              <th style={{ textAlign: "left", color: TEXT_MID, fontWeight: 600, padding: "8px 10px", borderBottom: `2px solid ${ORANGE_PALE}` }}>Tipe</th>
              <th style={{ textAlign: "left", color: TEXT_MID, fontWeight: 600, padding: "8px 10px", borderBottom: `2px solid ${ORANGE_PALE}` }}>Ukuran</th>
              <th style={{ textAlign: "left", color: TEXT_MID, fontWeight: 600, padding: "8px 10px", borderBottom: `2px solid ${ORANGE_PALE}` }}>Diubah</th>
              <th style={{ textAlign: "left", color: TEXT_MID, fontWeight: 600, padding: "8px 10px", borderBottom: `2px solid ${ORANGE_PALE}` }}></th>
            </tr>
          </thead>
          <tbody>
            {dokumenList.map((d, i) => (
              <tr key={d.nama}>
                <td style={{ padding: "10px 10px", borderBottom: i === dokumenList.length - 1 ? "none" : `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 8 }}>
                  <FileText size={15} color={ORANGE_DARK} /> {d.nama}
                </td>
                <td style={{ padding: "10px 10px", borderBottom: i === dokumenList.length - 1 ? "none" : `1px solid ${BORDER}` }}>{d.tipe}</td>
                <td style={{ padding: "10px 10px", borderBottom: i === dokumenList.length - 1 ? "none" : `1px solid ${BORDER}` }}>{d.ukuran}</td>
                <td style={{ padding: "10px 10px", borderBottom: i === dokumenList.length - 1 ? "none" : `1px solid ${BORDER}` }}>{d.diubah}</td>
                <td style={{ padding: "10px 10px", borderBottom: i === dokumenList.length - 1 ? "none" : `1px solid ${BORDER}` }}>
                  <Download size={15} color={TEXT_MID} style={{ cursor: "pointer" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function KampanyePage() {
  return (
    <div>
      <PageTitle title="Kampanye" subtitle={`${kampanyeList.length} kampanye pemasaran`} actionLabel="Kampanye Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "nama", label: "Nama Kampanye" },
            { key: "tipe", label: "Tipe" },
            { key: "status", label: "Status" },
            { key: "prospek", label: "Prospek Dihasilkan" },
            { key: "anggaran", label: "Anggaran" },
          ]}
          rows={kampanyeList}
        />
      </Card>
    </div>
  );
}

function TugasPage() {
  return (
    <div>
      <PageTitle title="Tugas" subtitle={`${tugasList.length} tugas`} actionLabel="Tugas Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "subjek", label: "Subjek" },
            { key: "tanggal", label: "Tanggal Jatuh Tempo" },
            { key: "status", label: "Status" },
          ]}
          rows={tugasList}
        />
      </Card>
    </div>
  );
}

function PertemuanPage() {
  return (
    <div>
      <PageTitle title="Pertemuan" subtitle={`${pertemuanList.length} pertemuan`} actionLabel="Pertemuan Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "titel", label: "Titel" },
            { key: "dari", label: "Dari" },
            { key: "kepada", label: "Kepada" },
          ]}
          rows={pertemuanList}
        />
      </Card>
    </div>
  );
}

function PanggilanPage() {
  return (
    <div>
      <PageTitle title="Panggilan" subtitle={`${panggilanList.length} panggilan`} actionLabel="Panggilan Baru" />
      <Card>
        <DataTable
          columns={[
            { key: "subjek", label: "Subjek" },
            { key: "kontak", label: "Kontak" },
            { key: "tipe", label: "Tipe" },
            { key: "tanggal", label: "Tanggal" },
            { key: "status", label: "Status" },
          ]}
          rows={panggilanList}
        />
      </Card>
    </div>
  );
}

const pageComponents = {
  Beranda: BerandaPage,
  Laporan: LaporanPage,
  Analitik: AnalitikPage,
  "Permintaan Saya": PermintaanPage,
  Prospek: ProspekPage,
  Kontak: KontakPage,
  Akun: AkunPage,
  Transaksi: TransaksiPage,
  Perkiraan: PerkiraanPage,
  Dokumen: DokumenPage,
  Kampanye: KampanyePage,
  Tugas: TugasPage,
  Pertemuan: PertemuanPage,
  Panggilan: PanggilanPage,
};

/* ---------------------------------------------------------- */
/* Login page                                                   */
/* ---------------------------------------------------------- */

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("demo@altacrm.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit() {
    if (!email.trim() || !password.trim()) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setError("");
    const name = email.split("@")[0] || "User";
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    onLogin(displayName);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${ORANGE} 0%, #ffb066 100%)`,
        fontFamily: "'Segoe UI', Arial, sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: 360,
          maxWidth: "90vw",
          borderRadius: 16,
          padding: "40px 32px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            background: ORANGE,
            borderRadius: 14,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          A
        </div>
        <h1 style={{ fontSize: 20, marginBottom: 6, color: TEXT_DARK }}>Alta CRM</h1>
        <p style={{ color: TEXT_MID, fontSize: 13, marginBottom: 24 }}>Masuk untuk melanjutkan ke Beranda</p>

        <div>
          <div style={{ position: "relative", marginBottom: 14 }}>
            <Mail size={16} color={TEXT_MID} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Email"
              style={{
                width: "100%",
                padding: "12px 14px 12px 36px",
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ position: "relative", marginBottom: 14 }}>
            <Lock size={16} color={TEXT_MID} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px 14px 12px 36px",
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: TEXT_MID, margin: "-4px 0 18px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} style={{ width: "auto", margin: 0 }} />
              Ingat saya
            </label>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: ORANGE_DARK, textDecoration: "none", fontWeight: 600 }}>
              Lupa password?
            </a>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: 12,
              background: ORANGE,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Masuk
          </button>
          <div style={{ color: "#d94141", fontSize: 12, marginTop: 10, minHeight: 14 }}>{error}</div>
        </div>

        <div style={{ marginTop: 18, fontSize: 11, color: TEXT_MID, background: ORANGE_LIGHT, padding: 8, borderRadius: 8 }}>
          Demo login — gunakan email &amp; password apa saja, atau nilai default yang sudah terisi.
        </div>
        <div style={{ marginTop: 20, fontSize: 11, color: TEXT_MID }}>© 2026 Alta CRM. Semua hak dilindungi.</div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- */
/* Nav item + Dashboard shell                                   */
/* ---------------------------------------------------------- */

function NavItem({ icon: Icon, label, active, onClick, sub }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: sub ? "10px 14px 10px 26px" : "10px 14px",
        borderRadius: 8,
        fontSize: sub ? 13.5 : 14,
        cursor: "pointer",
        color: active ? "#fff" : "#e4d4c2",
        fontWeight: active ? 600 : 400,
        background: active ? ORANGE : "transparent",
      }}
    >
      <Icon size={16} />
      <span>{label}</span>
    </div>
  );
}

function Dashboard({ userName, onLogout }) {
  const [active, setActive] = useState("Beranda");
  const ActivePage = pageComponents[active] || BerandaPage;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        background: "#fffaf5",
        color: TEXT_DARK,
      }}
    >
      <div style={{ width: 230, background: "#2c1a0e", color: "#f5e6d8", flexShrink: 0, display: "flex", flexDirection: "column", padding: "18px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 20px 20px",
            fontWeight: 700,
            fontSize: 17,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: 10,
          }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 8, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>A</div>
          <span>Alta CRM</span>
        </div>

        <div style={{ padding: "8px 10px" }}>
          {navMain.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} active={active === item.label} onClick={() => setActive(item.label)} />
          ))}
        </div>

        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a8917a", padding: "14px 20px 6px" }}>Penjualan</div>
        <div style={{ padding: "0 10px" }}>
          {navPenjualan.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} active={active === item.label} onClick={() => setActive(item.label)} sub />
          ))}
        </div>

        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a8917a", padding: "14px 20px 6px" }}>Aktivitas</div>
        <div style={{ padding: "0 10px" }}>
          {navAktivitas.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} active={active === item.label} onClick={() => setActive(item.label)} sub />
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div
          style={{
            background: "#fff",
            borderBottom: `1px solid ${BORDER}`,
            padding: "14px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontSize: 20, margin: 0 }}>{active}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: ORANGE_LIGHT, borderRadius: 8, padding: "8px 14px", fontSize: 13, color: TEXT_MID, width: 200 }}>
              <Search size={14} />
              <span>Cari catatan</span>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: ORANGE, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={onLogout}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: ORANGE_DARK,
                background: ORANGE_LIGHT,
                border: `1px solid ${ORANGE_PALE}`,
                padding: "6px 12px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              <LogOut size={13} />
              Keluar
            </button>
          </div>
        </div>

        <div style={{ padding: "26px 28px", overflowY: "auto" }}>
          <ActivePage userName={userName} />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- */
/* Root                                                          */
/* ---------------------------------------------------------- */

export default function AltaCRM() {
  const [userName, setUserName] = useState(null);

  if (!userName) {
    return <LoginPage onLogin={setUserName} />;
  }

  return <Dashboard userName={userName} onLogout={() => setUserName(null)} />;
}
