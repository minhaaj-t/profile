import React, { useState } from "react";

interface ContactFormProps {
  isDarkMode: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div
      className={`space-y-12 ${isDarkMode ? "text-white" : "text-gray-800"}`}
    >
      {/* Contact Form */}
      <form
        action="https://formsubmit.co/minhajt.uae@gmail.com"
        method="POST"
        className={`p-8 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for your message! We'll get back to you shortly."
        />
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* FAQ Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              question: "What services do I offer?",
              answer:
                "I offer a range of services including graphic design,TALL stack or MERN stack web development, React Native mobile app development, and digital marketing.",
            },
            {
              question: "What technologies do I use for web development?",
              answer:
                "I utilize a variety of technologies including HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React, Node.js) for web development.",
            },
            {
              question: "How can clients contact me?",
              answer:
                "Clients can reach out through my personal portfolio or directly via phone at +971 55 829 1800.",
            },
            {
              question: "Do I have any recommendations from clients?",
              answer:
                "Yes! I've received positive testimonials from clients highlighting my problem-solving abilities, expertise in React Native, and commitment to delivering high-quality work.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left font-semibold flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeQuestion === index ? "−" : "+"}
                </span>
              </button>
              {activeQuestion === index && (
                <p className="mt-2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <div
          className={`p-4 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          <p>
            <span className="font-semibold mr-2">📧</span>
            <a
              href="mailto:minhajt.uae@gmail.com"
              className="text-blue-500 hover:underline"
            >
              minhajt.uae@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold mr-2">📞</span>
            <a
              href="tel:+971558291800"
              className="text-blue-500 hover:underline"
            >
              +971 55 829 1800
            </a>
          </p>
          <p>
            <span className="font-semibold mr-2">📍</span> Ajman, UAE
          </p>
        </div>
      </div>
    </div>
  );
};
