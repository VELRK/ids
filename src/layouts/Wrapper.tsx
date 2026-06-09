"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import ClientAnimations from "./ClientAnimations";
import FloatingContact from "@/components/common/FloatingContact";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  const pathname = usePathname();

  return (
    <>
      {children}
      <ClientAnimations key={pathname} />
      <ScrollToTop />
      <FloatingContact />
      <ToastContainer position="top-center" />
    </>
  );
};


export default Wrapper;

