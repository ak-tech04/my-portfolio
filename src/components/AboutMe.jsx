import React from "react";

function AboutMe() {
  return (
    <section className="w-full h-[60vh]   py-8">
      <div className="h-full w-full flex flex-col md:flex-row items-center  gap-8 md:gap-12">
        {/* Right on desktop / Top on mobile */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[35vh] md:h-full flex items-center justify-center">
          <div className="w-full h-[40%] rounded-2xl border border-zinc-700 bg-zinc-800/60 flex items-center justify-center text-zinc-400">
            Image goes here
          </div>
        </div>

        {/* Left on desktop / Bottom on mobile */}
        <div className="order-2 md:order-1 w-full md:w-1/2 ">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className=" text-base md:text-lg leading-relaxed">
            As a Software Developer, I specialize in the architecture of modern
            web applications. My expertise lies in the React ecosystem, where I
            focus on building responsive frontends that communicate effectively
            with REST APIs. <br /> <br />I lean heavily into Backend-as-a-Service
            (BaaS) platforms to deploy full-stack features rapidly without
            sacrificing performance. By leveraging tools like Appwrite and
            Supabase, I build apps that are data-driven and user-centric. I am a
            Linux power-user by choice, valuing the granular control and
            performance it brings to the development lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
