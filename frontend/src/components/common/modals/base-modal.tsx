type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative max-h-[80vh] overflow-auto rounded-2xl bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}
