
// Import the default toast implementation
import { toast as sonnerToast } from "sonner";
import { useToast as useSonnerToast } from "@/components/ui/use-toast";

export { useSonnerToast as useToast };

// Re-export the toast function with type checking
export const toast = sonnerToast;
