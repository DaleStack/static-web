import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Email sent successfully!");
        formRef.current.reset();
      } else {
        toast.error(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white">{Contact.title}</h2>
        <h4 className="subtitle">{Contact.subtitle}</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="btn self-start bg-white text-dark_primary"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div key={i} className="flex items-center gap-2">
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
