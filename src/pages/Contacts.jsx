import { useState, Suspense, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";

const DEFAULT_FORM = {
  name: "",
  email: "",
  message: "",
};

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mikhail",
          from_email: form.email,
          to_email: "mik86@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        setForm(DEFAULT_FORM);
        // TODO show sucess message
        // TODO hide alert
      })
      .catch((error) => {
        console.log(error);
        // TODO show alert with error
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w[50%] flex flex-col">
        <h1 className="head-text">Get in touch!</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
          action=""
        >
          <label htmlFor="" className="text-black-500 font-semibold">
            name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            your message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="let me know how I can help!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas fov={75} near={0.1} far={1000} camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Fox
              scale={[0.5, 0.5, 0.5]}
              rotation={[12.6, -0.6, 0]}
              position={[0.5, 0.35, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contacts;
