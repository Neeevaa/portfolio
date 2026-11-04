import React, { createContext, useContext, useState, useCallback } from "react";

const ImageModalContext = createContext({
  isOpen: false,
  imageData: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ImageModalProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((data) => {
    if (!data || !data.src) return;
    setModalData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ImageModalContext.Provider
      value={{
        isOpen,
        imageData: modalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ImageModalContext.Provider>
  );
}

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (!context) {
    return {
      isOpen: false,
      imageData: null,
      openModal: () => {},
      closeModal: () => {},
    };
  }
  return context;
}

