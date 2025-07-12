import { useState } from "react";

type SendSyllabusProps = {
  courseName: string;
  pdfUrl: string;
};

export const Demo = () => {
  return (
    <div>
      <SendSyllabus
        courseName="Angular"
        pdfUrl="https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/offlineSyllabus%2FAngular-syllabus.pdf?alt=media&token=e3e3e852-89d5-48e3-8b30-6e083c2c7efb"
      />
    </div>
  );
};

export const SendSyllabus = ({ courseName, pdfUrl }: SendSyllabusProps) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const isValidPhone = (number: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(number);
  };

  const sendSyllabusToWhatsApp = () => {
    if (!isValidPhone(phone)) {
      setError("Please enter a valid phone number with country code.");
      return;
    }

    setError(""); // Clear error if valid
    const message = `Hi! Here is the syllabus for the ${courseName} course:\n${pdfUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/91${phone}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">
        Send {courseName} Syllabus
      </h2>
      <input
        type="tel"
        placeholder="Enter WhatsApp number (e.g. 919876543210)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={sendSyllabusToWhatsApp}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Send to WhatsApp
      </button>
    </div>
  );
};
