
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
  action?: React.ReactNode;
};

export const toast = ({
  title,
  description,
  variant = "default",
  duration = 3000,
  action,
}: ToastProps) => {
  sonnerToast(title, {
    description,
    duration,
    action,
    style: variant === "destructive" ? { backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" } : undefined,
  });
};

export const useToast = () => {
  return {
    toast,
    toasts: [] // This is a placeholder for compatibility with shadcn toast system
  };
};

export default useToast;
