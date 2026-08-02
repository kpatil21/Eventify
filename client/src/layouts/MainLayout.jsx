import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "../components/auth/RegisterModal";

export default function MainLayout() {
    // =========================================================
  // Modal State
  // =========================================================

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <>
      <>
      <Navbar
        openLogin={() => setIsLoginOpen(true)}
        openRegister={() => setIsRegisterOpen(true)}
      />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <Footer />
    </>
    </>
  );
}