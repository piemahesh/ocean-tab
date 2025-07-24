import { useEffect, useState, type FC } from "react";
import { X, User, Phone, Globe, AlertCircle } from "lucide-react";
import { getCookie, setCookie } from "../../../utils";
import { createPortal } from "react-dom";
import { SEND_GREETING, SEND_SYLLABUS } from "../services";
import type { CourseData } from "../../../types";
import { WHATS_APP_ICON } from "../../../assets";
import { showErrorToast, showSuccessToast } from "../../shared";

interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

interface FormData {
  name: string;
  countryCode: string;
  phoneNumber: string;
}

interface FormErrors {
  name?: string;
  countryCode?: string;
  phoneNumber?: string;
}

const countryCodes: CountryCode[] = [
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  // add more if needed
];
interface StudentModalProps {
  setIsModalOpen: (open: boolean) => void;
  courseName: string;
  syllabusLink: string;
}
export const StudentModal: FC<StudentModalProps> = ({
  setIsModalOpen,
  courseName,
  syllabusLink,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    countryCode: "+91",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCookie("customerData", JSON.stringify(formData), 15);
      setIsLoading(true);

      const phoneNumber = formData.phoneNumber;
      const studentName = formData.name;

      const [_, { success, message }] = await Promise.all([
        await SEND_GREETING({
          phoneNumber,
          studentName,
          countryCode: formData.countryCode,
        }),
        await SEND_SYLLABUS({
          courseName,
          phoneNumber,
          studentName,
          syllabusLink,
          countryCode: formData.countryCode,
        }),
      ]).finally(() => {
        console.log("Submitted:", formData);
        setIsLoading(false);
        setIsModalOpen(false);
      });
      if (!success) {
        showErrorToast(message || "Failed to send syllabus. Please try again.");
      } else {
        showSuccessToast(message || "Syllabus sent successfully! 📚");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl max-w-md w-full p-8 border border-white/20 relative overflow-hidden animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">
              ✨ Enter Your Details
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6 flex flex-col gap-1.5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                    errors.name ? "border-red-500" : "border-white/20"
                  } rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="flex absolute items-center mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            {/* Country Code Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Country Code
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition-all backdrop-blur-sm"
                >
                  {countryCodes.map(({ code, country, flag }) => (
                    <option key={code} value={code} className="bg-gray-800">
                      {flag} {code} ({country})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                    errors.phoneNumber ? "border-red-500" : "border-white/20"
                  } rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm`}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <div className="flex absolute items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phoneNumber}
                  </div>
                )}
              </div>
            </div>

            <div className="text-sm mt-2 text-gray-400 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
              🔒 Your details are secured and will auto-expire in 10 minutes
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 px-4 border border-white/20 text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl transition-all duration-200 font-semibold transform hover:scale-105 disabled:scale-100"
              >
                {isLoading ? "Sending..." : "Send Syllabus 🚀"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhatsAppButton: FC<CourseData> = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCount((prev) => (prev + 1) % WHATS_APP_ICON.length);
      }, 300); // Change image every 300 milliseconds
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleButtonClick = async () => {
    try {
      const customer = JSON.parse(getCookie("customerData") || "{}");
      if (customer.name && customer.phoneNumber) {
        console.log("Customer data found:", customer);
        setIsLoading(true);
        const { success, message } = await SEND_SYLLABUS({
          courseName: data.courseName,
          phoneNumber: customer.phoneNumber,
          studentName: customer.name,
          syllabusLink: data.syllabusLink,
          countryCode: customer.countryCode,
        });
        if (!success) {
          showErrorToast(
            message || "Failed to send syllabus. Please try again."
          );
        } else {
          showSuccessToast(message || "Syllabus sent successfully! 📚");
          setIsModalOpen(false);
        }

        // Proceed with WhatsApp logic
      } else {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error sending syllabus:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
        setCount(0);
      }, 3000);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-gradient-to-r relative max-w-md  py-3 px-6 from-green-600 to-green-500/70 font-semibold h-fit w-full  text-white rounded-lg"
      >
        <img
          className="absolute h-[4.5rem] left-4.5 top-1/2 -translate-y-1/2 -translate-x-1/2"
          src={isLoading ? WHATS_APP_ICON[count] : WHATS_APP_ICON[0]}
          alt=""
        />
        Send Syllabus to WhatsApp
      </button>

      {isModalOpen &&
        createPortal(
          <StudentModal
            courseName={data.courseName}
            syllabusLink={data.syllabusLink}
            setIsModalOpen={setIsModalOpen}
          />,
          document.body
        )}
    </>
  );
};
