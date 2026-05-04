import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking & Payment | Kunjuveedu Devi Temple",
  description:
    "Book a pooja, make a donation, or contribute to temple development at Kunjuveedu Durga Bhagavathi Temple.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
