import React from 'react'
import Link from 'next/link';

export default function BookAppointmentButton() {
  return (
    <Link href="https://calendly.com/barciastech/30min" legacyBehavior>
      <a className="bg-red-500 hover:bg-white text-white border border-zinc-50 border-2 hover:text-red-500 font-bold py-3 px-5 rounded text-center">
        Book a FREE Consultation
       </a>
    </Link>
  )
}
