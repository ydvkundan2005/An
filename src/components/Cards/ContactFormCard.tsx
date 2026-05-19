import { motion } from "motion/react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

import { BsSend, BsSendCheck } from "react-icons/bs";
import { Card } from "../ui/card";

const viewportConfig = { once: true, margin: "-100px" as const };

export const ContactFormCard = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formValues, setFormValues] = useState({
    senderName: "",
    senderEmail: "",
    reasonToContact: "General inquries",
    senderMsg: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const sendEmailPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderName: formValues.senderName,
            senderEmail: formValues.senderEmail,
            reasonToContact: formValues.reasonToContact,
            senderMsg: formValues.senderMsg,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("✅ Email sent successfully:", data.message);
          setIsSent(true);
          setFormValues({
            senderName: "",
            senderEmail: "",
            reasonToContact: "General inquries",
            senderMsg: "",
          });
          resolve(data.message);
        } else {
          console.error("❌ Failed to send email:", data.error);
          reject(new Error(data.error || "Failed to send message"));
        }
      } catch (error) {
        console.error("❌ Network error or unexpected error:", error);
        reject(error);
      } finally {
        setIsSending(false);
      }
    });

    toast.promise(sendEmailPromise, {
      loading: "Sending your message...",
      success: "Message has been received! I'll get back to you soon.",
      error: (error) => {
        if (error.message.includes("not valid")) {
          return "❌ The email address you entered is not valid (".concat(
            formValues.senderEmail,
            "). Please use a real email."
          );
        }
        return (
          error.message ||
          "An error occurred while sending your message. Please try again later."
        );
      },
    });
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  }, [isSent]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group h-full"
    >
      <Card
        className="relative overflow-hidden backdrop-blur-xl border transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
        }}
      >
        <div className="relative z-10 p-4 md:p-6 flex flex-col flex-grow">
          <form onSubmit={sendEmail} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="senderName"
                onChange={handleChange}
                value={formValues.senderName}
                className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
                style={{
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                name="senderEmail"
                onChange={handleChange}
                value={formValues.senderEmail}
                className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
                style={{
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              />
            </div>

            <select
              required
              name="reasonToContact"
              onChange={handleChange}
              value={formValues.reasonToContact}
              className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30"
              style={{
                color: "hsl(var(--foreground))",
                background: "hsl(var(--glass-bg))",
                borderColor: "hsl(var(--glass-border))",
              }}
            >
              <option className="text-black" value="General inquries">
                General Inquiries
              </option>
              <option className="text-black" value="Project inquiries">
                Project Inquiries
              </option>
              <option className="text-black" value="Collaboration request">
                Collaboration Request
              </option>
              <option className="text-black" value="Feedback/Question">
                Feedback/Question
              </option>
              <option className="text-black" value="Bug report">
                Bug Report
              </option>
              <option className="text-black" value="Feature request">
                Feature Request
              </option>
            </select>

            <textarea
              placeholder="Your Message"
              rows={4}
              name="senderMsg"
              onChange={handleChange}
              value={formValues.senderMsg}
              required
              className="w-full px-4 py-3 text-sm rounded-xl backdrop-blur-xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/30 resize-none"
              style={{
                color: "hsl(var(--foreground))",
                background: "hsl(var(--glass-bg))",
                borderColor: "hsl(var(--glass-border))",
              }}
            />

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full btn-primary px-6 py-3 rounded-xl font-medium text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : isSent ? (
                <>
                  <BsSendCheck className="w-5 h-5" />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <BsSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </Card>
    </motion.div>
  );
};
