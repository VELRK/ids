"use client";
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Image, { StaticImageData } from "next/image";

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: StaticImageData | string | null;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal 
      open={isOpen} 
      onClose={onClose} 
      center 
      styles={{
        modal: {
          maxWidth: '1000px',
          width: '100%',
          padding: '20px',
          background: 'transparent',
          boxShadow: 'none'
        },
        closeButton: {
          background: '#fff',
          borderRadius: '50%',
        }
      }}
    >
      {imageSrc && (
        <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src={imageSrc}
            alt="Screenshot"
            style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: "90vh", borderRadius: "12px" }}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImagePopup;
