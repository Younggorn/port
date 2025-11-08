// src/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import AuroraBackground from "../components/auroraBackground";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* แสดงหน้าลูกตาม route */}
      </main>
      <Footer />
    </>
  );
}
