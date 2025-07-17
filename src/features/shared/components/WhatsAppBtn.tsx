import { WheatIcon } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string; // in international format, e.g., '919876543210'
  message: string;
  label?: string;
}

export const WhatsAppBtn: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  label = "Send Syllabus",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-transform hover:scale-105 active:scale-95 duration-200"
    >
      <WheatIcon className="text-xl" />
      <span className="font-semibold">{label}</span>
    </a>
  );
};
