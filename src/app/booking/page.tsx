"use client";

import { useState } from "react";
import Link from "next/link";

const poojaOptions = [
  "Nirmalyam (Free)",
  "Archana – ₹ 51",
  "Pushpanjali – ₹ 101",
  "Deeparadhana – ₹ 201",
  "Birthday Archana – ₹ 251",
  "Panchamrutabhishekam – ₹ 501",
  "Ayilyam Pooja – ₹ 551",
  "Ganapathi Homam – ₹ 3,001",
  "Sahasranamarchana – ₹ 1,001",
  "Kalasabhishekam – ₹ 2,501",
  "Devi Mahatmya Homam – ₹ 11,001",
  "Udayasthamana Pooja – ₹ 5,001",
  "General Donation",
  "Development Fund Contribution",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  pooja: string;
  date: string;
  nakshatram: string;
  message: string;
  consent: boolean;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  pooja: "",
  date: "",
  nakshatram: "",
  message: "",
  consent: false,
};

export default function BookingPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.pooja) newErrors.pooja = "Please select a pooja or donation type.";
    if (!form.date) newErrors.date = "Please choose a preferred date.";
    if (!form.consent) newErrors.consent = "Please consent to proceed.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div
          className="max-w-md w-full text-center rounded-3xl shadow-xl p-10 border"
          style={{ background: "#fff8f0", borderColor: "rgba(212,160,23,0.4)" }}
        >
          <div className="text-6xl mb-4">🙏</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
            Booking Received!
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--dark-text)" }}>
            Thank you, <strong>{form.name}</strong>! Your booking request for{" "}
            <strong>{form.pooja}</strong> on{" "}
            <strong>{new Date(form.date).toLocaleDateString("en-IN", { dateStyle: "long" })}</strong>{" "}
            has been received. The temple office will contact you on{" "}
            <strong>{form.phone}</strong> to confirm.
          </p>
          <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            Please complete payment using the UPI QR code below after
            receiving confirmation.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="px-6 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            style={{ background: "var(--primary)", color: "var(--gold)" }}
          >
            Submit Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <p className="text-4xl mb-3">📅</p>
        <h1 className="text-4xl font-bold" style={{ color: "var(--gold)" }}>
          Booking &amp; Payment
        </h1>
        <p
          className="mt-3 text-sm opacity-75 max-w-lg mx-auto"
          style={{ color: "#fdf6e3" }}
        >
          Book a pooja, make a donation, or contribute to temple development —
          all in one place.
        </p>
      </section>

      {/* Decorative band */}
      <div
        className="h-2"
        style={{
          background:
            "linear-gradient(90deg, var(--primary), var(--saffron), var(--gold), var(--saffron), var(--primary))",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-12">
        {/* ── Left: QR + Payment info ── */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--primary)" }}>
              Pay via UPI
            </h2>
            <div
              className="h-1 w-12 rounded-full mb-5"
              style={{ background: "var(--gold)" }}
            />
          </div>

          {/* QR Code card */}
          <div
            className="rounded-2xl border p-6 text-center shadow-sm"
            style={{ background: "#fff8f0", borderColor: "rgba(212,160,23,0.35)" }}
          >
            {/* Placeholder QR — inline SVG grid pattern */}
            <div
              className="mx-auto mb-4 rounded-xl border-4 flex items-center justify-center overflow-hidden"
              style={{
                width: 200,
                height: 200,
                borderColor: "var(--primary)",
                background: "#fff",
              }}
              aria-label="UPI QR Code"
            >
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Finder pattern TL */}
                <rect x="10" y="10" width="40" height="40" rx="4" fill="#7b1c1c" />
                <rect x="17" y="17" width="26" height="26" rx="2" fill="white" />
                <rect x="22" y="22" width="16" height="16" rx="1" fill="#7b1c1c" />
                {/* Finder pattern TR */}
                <rect x="110" y="10" width="40" height="40" rx="4" fill="#7b1c1c" />
                <rect x="117" y="17" width="26" height="26" rx="2" fill="white" />
                <rect x="122" y="22" width="16" height="16" rx="1" fill="#7b1c1c" />
                {/* Finder pattern BL */}
                <rect x="10" y="110" width="40" height="40" rx="4" fill="#7b1c1c" />
                <rect x="17" y="117" width="26" height="26" rx="2" fill="white" />
                <rect x="22" y="122" width="16" height="16" rx="1" fill="#7b1c1c" />
                {/* Data modules (decorative) */}
                {[60, 65, 70, 75, 80, 85, 90, 95, 100].map((x) =>
                  [60, 65, 70, 75, 80, 85, 90, 95, 100].map((y) => (
                    <rect
                      key={`${x}-${y}`}
                      x={x}
                      y={y}
                      width={3}
                      height={3}
                      fill={((x + y) / 5) % 2 === 0 ? "#7b1c1c" : "white"}
                    />
                  ))
                )}
                {/* OM symbol in centre */}
                <text x="80" y="48" textAnchor="middle" fontSize="12" fill="#d4a017" fontWeight="bold">
                  ॐ
                </text>
                <text x="80" y="150" textAnchor="middle" fontSize="8" fill="#8b6f47">
                  Scan to Pay
                </text>
              </svg>
            </div>

            <p className="font-bold text-base mb-1" style={{ color: "var(--primary)" }}>
              Kunjuveedu Devi Temple
            </p>
            <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>
              UPI ID:{" "}
              <span className="font-mono font-bold" style={{ color: "var(--primary)" }}>
                temple@upi
              </span>
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              GPay · PhonePe · Paytm · BHIM
            </p>
          </div>

          {/* Bank transfer details */}
          <div
            className="rounded-2xl border p-5 text-sm"
            style={{ background: "#fff8f0", borderColor: "rgba(212,160,23,0.25)" }}
          >
            <h3 className="font-bold mb-3" style={{ color: "var(--primary)" }}>
              Bank Transfer Details
            </h3>
            <table className="w-full text-left" style={{ color: "var(--dark-text)" }}>
              <tbody>
                {[
                  ["Account Name", "Kunjuveedu Devi Temple Trust"],
                  ["Bank", "State Bank of India"],
                  ["Account No.", "1234 5678 9012"],
                  ["IFSC", "SBIN0001234"],
                  ["Branch", "Kunjuveedu, Kerala"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b last:border-0" style={{ borderColor: "rgba(212,160,23,0.15)" }}>
                    <td className="py-2 pr-4 font-medium opacity-70 w-1/2">{label}</td>
                    <td className="py-2 font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div
            className="rounded-xl p-4 text-xs border flex gap-2"
            style={{ background: "#fdf0f0", borderColor: "#c0392b55", color: "var(--dark-text)" }}
          >
            <span className="text-base flex-shrink-0">📌</span>
            <p>
              After payment, please share a screenshot or transaction ID on
              WhatsApp to +91 98765 43210 for faster confirmation.
            </p>
          </div>
        </div>

        {/* ── Right: Booking form ── */}
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--primary)" }}>
            Booking Form
          </h2>
          <div
            className="h-1 w-12 rounded-full mb-5"
            style={{ background: "var(--gold)" }}
          />

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border p-6 shadow-sm space-y-5"
            style={{ background: "#fff8f0", borderColor: "rgba(212,160,23,0.25)" }}
            noValidate
          >
            {/* Name */}
            <Field label="Full Name *" error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Arun Kumar"
                className="input-field"
                style={inputStyle}
              />
            </Field>

            {/* Phone */}
            <Field label="Phone Number *" error={errors.phone}>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="input-field"
                style={inputStyle}
              />
            </Field>

            {/* Email */}
            <Field label="Email (optional)" error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={inputStyle}
              />
            </Field>

            {/* Pooja */}
            <Field label="Select Pooja / Donation *" error={errors.pooja}>
              <select
                name="pooja"
                value={form.pooja}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">— Choose a pooja —</option>
                {poojaOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            {/* Date */}
            <Field label="Preferred Date *" error={errors.date}>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                style={inputStyle}
              />
            </Field>

            {/* Nakshatram */}
            <Field label="Nakshatram / Birth Star (optional)">
              <input
                type="text"
                name="nakshatram"
                value={form.nakshatram}
                onChange={handleChange}
                placeholder="e.g. Revathi"
                style={inputStyle}
              />
            </Field>

            {/* Message */}
            <Field label="Special Instructions (optional)">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific names to include, prayer requests…"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </Field>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-0.5 accent-red-800 w-4 h-4 flex-shrink-0"
                />
                <span className="text-sm" style={{ color: "var(--dark-text)" }}>
                  I understand that this form submits a booking{" "}
                  <em>request</em> and that the temple office will confirm
                  availability before payment is due. *
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-xs" style={{ color: "#c0392b" }}>
                  {errors.consent}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-bold text-sm transition-transform hover:scale-[1.02] shadow-md"
              style={{ background: "var(--primary)", color: "var(--gold)" }}
            >
              Submit Booking Request 🙏
            </button>

            <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
              View all poojas →{" "}
              <Link href="/poojas" className="underline" style={{ color: "var(--saffron)" }}>
                Poojas &amp; Cost
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* FAQ strip */}
      <section
        className="py-12 px-4"
        style={{ background: "#fff8f0" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8" style={{ color: "var(--primary)" }}>
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                q: "When will I receive a confirmation?",
                a: "The temple office will call or message you within 24 hours of your booking request.",
              },
              {
                q: "Can I book for a future festival date?",
                a: "Yes! Select any future date. Festival dates fill up quickly, so book early.",
              },
              {
                q: "Is online payment mandatory?",
                a: "No. You may pay at the temple on the day of the pooja if preferred.",
              },
              {
                q: "What if my preferred date is unavailable?",
                a: "The temple office will suggest an alternate date when they confirm your request.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-4 border"
                style={{ borderColor: "rgba(212,160,23,0.25)", background: "#fffaf4" }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--primary)" }}>
                  {q}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.6rem 0.9rem",
  borderRadius: "0.75rem",
  border: "1.5px solid rgba(212,160,23,0.4)",
  background: "#fffaf4",
  color: "var(--dark-text)",
  fontSize: "0.875rem",
  outline: "none",
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium mb-1"
        style={{ color: "var(--dark-text)" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#c0392b" }}>
          {error}
        </p>
      )}
    </div>
  );
}
