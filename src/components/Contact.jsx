import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { useFormik } from "formik";

const emailKey = import.meta.env.VITE_EMAILJS_KEY;
const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await emailjs.send(
          emailKey,
          templateKey,
          {
            from_name: values.name,
            to_name: "Shanda",
            from_email: values.email,
            to_email: "shanda.wun@gmail.com",
            message: values.message,
          },
          publicKey
        );
        alert("Thank you. I will get back to you as soon as possible.");
        setLoading(false);
        resetForm();
      } catch (error) {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      }
    },
  });

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-purple p-8 rounded-2xl bg-gradient-to-b from-indigo-900 from-30% to-black-200 to-70% py-6 px-6"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white text-[20px] mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 
              placeholder:text-white-100
              text-white-100 rounded-lg outlined-none border-none font-medium"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="mt-1 text-pink text-[14px] italic">
                *{formik.errors.name}
              </div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[20px] mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 
              placeholder:text-white-100
              text-white-100 rounded-lg outlined-none border-none font-medium"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1 text-pink text-[14px] italic">
                *{formik.errors.email}
              </div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[20px] mb-3">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-white-100 placeholder: italic
              text-white-100 rounded-lg outlined-none border-none font-medium"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="mt-1 text-pink text-[14px] italic">
                *{formik.errors.message}
              </div>
            ) : null}
          </label>

          <button
            type="submit"
            className="bg-black-500 py-3 px-8 outline-none 
            w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            disabled={loading}
          >
            {loading ? (
              <svg
                aria-hidden="true"
                className="animate-spin inline w-6 h-6 mr-2 text-white-100 dark:text-white-100 fill-blue"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              ""
            )}
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
