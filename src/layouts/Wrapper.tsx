import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import ClientAnimations from "./ClientAnimations";
import FloatingContact from "@/components/common/FloatingContact";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      {children}
      <ClientAnimations />
      <ScrollToTop />
      <FloatingContact />
      <ToastContainer position="top-center" />
    </>
  );
};


export default Wrapper;
