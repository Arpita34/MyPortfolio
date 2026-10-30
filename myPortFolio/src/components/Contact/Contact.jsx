import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope } from "react-icons/fa";
import { contactEmail } from "../../constants";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { label: contactEmail, href: `mailto:${contactEmail}`, icon: <FaEnvelope size={16} /> },
  { label: "GitHub", href: "https://github.com/Arpita34", icon: <FaGithub size={16} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arpita-pathak-48a47122b/", icon: <FaLinkedin size={16} /> },
  { label: "LeetCode", href: "https://leetcode.com/u/Arpita_34/", icon: <SiLeetcode size={16} /> },
];

// Full-width closing block: big headline on the left, form on the right.
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lnkofae", "template_tgwxfni", form.current, "uO8lqYMBnVdPV6GHj")
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent! I'll reply soon.", { position: "top-right", autoClose: 15000, pauseOnHover: true, closeOnClick: true, theme: "light" });
        },
        (error) => {
          console.error("Error sending message:", error);
          const reason = error?.text || error?.message || "";
          toast.error(`Failed to send. ${reason}`.trim(), { position: "top-right", autoClose: 15000, pauseOnHover: true, closeOnClick: true, theme: "light" });
        }
      );
  };

  const inputClass =
    "w-full p-3 rounded-xl bg-white text-ink placeholder:text-muted border-[1.5px] border-ink focus:outline-none focus:ring-4 focus:ring-lavender transition";

  return (
    <section id="contact" className="relative py-24 md:py-32 px-[7vw] lg:px-[12vw] font-sans bg-peach-soft border-t-[1.5px] border-ink">
      <ToastContainer />
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left */}
        <div>
          <p className="text-muted text-xs font-mono uppercase tracking-[0.3em] mb-3">Say hello</p>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-ink">
            Let&apos;s build
            <br />
            something{" "}
            <span className="inline-block bg-blush border-[1.5px] border-ink rounded-2xl px-3 shadow-hard -rotate-1">good.</span>
          </h2>
          <p className="text-ink-soft mt-6 text-base sm:text-lg max-w-md leading-relaxed">
            Internships, full-time roles, open source, or just a chat about a hard problem. My inbox is open.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn-press flex items-center gap-2 bg-white border-[1.5px] border-ink rounded-xl px-4 py-2.5 text-sm font-bold text-ink"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white rounded-2xl border-[1.5px] border-ink shadow-hard-lg overflow-hidden">
          <div className="px-5 py-3 bg-lavender border-b-[1.5px] border-ink font-mono text-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blush border border-ink" />
            <span className="w-3 h-3 rounded-full bg-butter border border-ink" />
            <span className="w-3 h-3 rounded-full bg-mint border border-ink" />
            <span className="ml-2">new_message.txt</span>
          </div>
          <form ref={form} onSubmit={sendEmail} className="p-5 sm:p-6 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="user_name" placeholder="Your name" aria-label="Your name" required className={inputClass} />
              <input type="email" name="user_email" placeholder="Your email" aria-label="Your email" required className={inputClass} />
            </div>
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" required className={inputClass} />
            <textarea name="message" placeholder="Message" aria-label="Message" rows="5" required className={inputClass} />
            <button type="submit" className="btn-press flex items-center justify-center gap-2 w-full bg-peach py-3 text-ink font-bold rounded-xl border-[1.5px] border-ink">
              <FaPaperPlane size={13} /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
