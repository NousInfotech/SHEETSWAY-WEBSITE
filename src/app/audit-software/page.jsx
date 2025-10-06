import React from 'react'
import AuditPortal from '@/components/Nav-components/audit-software/AuditPortal'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function AuditSoftwarePage() {
  return (
    <div>
      <Navbar/>
      <AuditPortal />
      <Footer/>
    </div>
  )
} 