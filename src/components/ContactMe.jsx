import React from "react";
import { Btn } from "./index";
import emailIcon from '../assets/icons/email.png'

function ContactMe() {
  return (
    <section className="w-full h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get In Touch
        </h2>

        <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <Btn text="Contact Me" iconPath={emailIcon} url='mailto:ak.dev@gamil.com' />
      </div>
    </section>
  );
}

export default ContactMe;
