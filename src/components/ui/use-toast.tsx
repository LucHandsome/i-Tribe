import { useState, useCallback } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = useCallback(({ message, type = 'info', duration = 3000 }: ToastProps) => {
    setToast({ message, type, duration });
    setTimeout(() => {
      setToast(null);
    }, duration);
  }, []);

  return { toast, showToast };
};

export default useToast; 