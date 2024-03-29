import GoBack from "@/components/Commons/GoBack";
import { changeCursor } from "@/reducers/cursorSlice";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement >(null);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

   const dispatch = useDispatch()
  const textEnter = () => dispatch(changeCursor("text"))
  const textLeave = () => dispatch(changeCursor("default"))


  const sendEmail = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input.length != 0 && form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY}`,
          `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY}`,
          form.current,
          `${process.env.NEXT_PUBLIC_EMAIL_KEY}`
        )
        .then(
          (result) => {
            toast("Thank you for your message", {
              icon: "✅",
              autoClose: 2000,
              hideProgressBar: true,
              pauseOnHover: false,
              theme: "dark",
              role: "alert",
            });
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            toast("There was a problem sending your message", {
              icon: "❌",
              autoClose: 2000,
              hideProgressBar: true,
              pauseOnHover: false,
              theme: "dark",
              role: "alert",
            });

          }
        );
    } else {
      toast("Your message cannot be empty", {
        icon: "❌",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "dark",
        role: "alert",
      });
    }
  };
  return (
    <motion.div
    initial={{x:"100%"}}
    animate={{x:"0"}}
    exit={{x:"-100%"}}
    transition={{ease:"easeIn", duration:.6}}
    >
             <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sami's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Me</title>
        <link rel="icon" href="/logo.png" />
      </Head>


      <GoBack/>
      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=""
        >
          <h3 className="text-center text-5xl pt-32">
         Loading...
          </h3>
        </motion.p>
      ) : (
        <div
          className="w-4/5 mx-auto flex justify-center rounded-xl p-6 pt-32 "
        >
          <form className="mt-8 space-y-8 w-4/5 max-w-[800px]" ref={form}>
            <h2 className="text-center text-4xl font-semibold underline">contact form</h2>
            <p className="text-center">Share me your opinions and features to add &#128522;</p>
            <div className="space-y-2">
              <label htmlFor="name">Name </label>
              <input type="text" className="input" name="user_name" id="name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="name">E-Mail </label>
              <input
                type="text"
                className="input"
                name="user_email"
                id="name"
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                cols={50}
                className="input"
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>

            <button className="btn hover:scale-105" onClick={(e:React.FormEvent<HTMLButtonElement>) => sendEmail(e)}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}>
              Send
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
