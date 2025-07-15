import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    email: "",
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d+$/.test(value) && value !== "") return;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const { name, email, mobile, message } = contactData;
    if (!name || !email || !mobile || !message) {
      setErrors({ message: "All fields are required" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: "Invalid email format" });
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setErrors({ mobile: "Mobile number must be 10 digits" });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://server-easy-solution-2.onrender.com/contact/create", contactData);
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setContactData({ email: "", name: "", mobile: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors(error.response?.data?.errors || { message: "Server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-[var(--light-grey)] rounded-lg py-6 px-4">
      <div className="grid lg:grid-cols-3 gap-6 items-center">
        <div className="grid grid-cols-2 gap-4">
          <InfoCard Icon={IoLocationOutline} title="Visit office" content="123 Main Street, City, Country" />
          <InfoCard Icon={IoCallOutline} title="Call us" content="+158 996 888" />
          <InfoCard Icon={FaWhatsapp} title="Chat to us" content="info@example.com" />
          <InfoCard Icon={MdOutlineChat} title="Fax" content="+1-548-2588" />
        </div>

        <div className="lg:col-span-2 bg-gray-100 dark:bg-[var(--light-grey)] rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-black dark:text-black mb-6">Contact Our Team</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <InputField type="text" name="name" placeholder="Name" value={contactData.name} onChange={handleInputChange} error={errors.name} />
            <InputField type="text" name="email" placeholder="Email" value={contactData.email} onChange={handleInputChange} error={errors.email} />
            <InputField type="text" name="mobile" placeholder="Mobile No." maxLength={10} value={contactData.mobile} onChange={handleInputChange} error={errors.mobile} />
            <TextArea name="message" placeholder="Message" rows={6} value={contactData.message} onChange={handleInputChange} error={errors.message} />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 flex items-center justify-center gap-2 transition duration-200 shadow-md hover:shadow-lg"
            >
              <IoIosSend className="h-6 w-6 animate-bounce" /> {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
      <div className="mt-12">
        <iframe
          src="https://maps.google.com/maps?q=indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          className="rounded-lg border"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const InfoCard = ({ Icon, title, content }) => (
  <div className="group flex flex-col items-center justify-center rounded-lg p-4 text-center border border-gray-300 dark:border-gray-600 shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:bg-[var(--dark-theme)]">
    <Icon className="text-3xl text-[var(--dark-theme)] transition-all duration-300 group-hover:text-white" />
    <h4 className="text-[var(--dark-theme)] dark:text-[var(--dark-theme)] font-bold mt-2 transition-all duration-300 group-hover:text-white">
      {title}
    </h4>
    <p className="text-gray-600 text-sm mt-1 transition-all duration-300 group-hover:text-white">
      {content}
    </p>
    <div className="absolute top-0 right-0 mt-1 mr-1 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
      {title}
    </div>
  </div>
);

const InputField = ({ type, name, placeholder, value, onChange, error }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextArea = ({ name, placeholder, rows, value, onChange, error }) => (
  <div>
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ContactUs;
