// components/FancyToasts.tsx
import { toast } from "sonner";
import { CheckCircle, X, XCircle } from "lucide-react";

const toastBaseStyles =
  "flex items-center gap-3 p-4 rounded-xl shadow-md border w-full max-w-[320px]";

export const showSuccessToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${toastBaseStyles} bg-green-50 border-green-200 animate-in slide-in-from-top-5`}
    >
      <CheckCircle className="text-green-600" />
      <div className="text-sm text-green-800">{message}</div>
      <button
        onClick={() => toast.dismiss(t)}
        className="ml-auto text-gray-400 hover:text-gray-600"
      >
        ✖
      </button>
    </div>
  ));
};

export const showErrorToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${toastBaseStyles} bg-red-50 border-red-200 animate-in slide-in-from-top-5`}
    >
      <XCircle className="text-red-600" />
      <div className="text-sm text-red-800">{message}</div>
      <button
        onClick={() => toast.dismiss(t)}
        className="ml-auto text-gray-400 hover:text-gray-600"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  ));
};
