import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        {children}
      </div>
    </div>
  );
};

export default Modal