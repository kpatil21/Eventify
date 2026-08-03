import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "../components/auth/RegisterModal";

export default function MainLayout() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // ============================
  // Modal Functions
  // ============================

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeLogin = () => setIsLoginOpen(false);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <>
      <Navbar
        openLogin={openLogin}
        openRegister={openRegister}
      />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLogin}
        openRegister={openRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeRegister}
        openLogin={openLogin}
      />

      <Footer />
    </>
  );
}