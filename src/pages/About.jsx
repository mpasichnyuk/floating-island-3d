const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mikhail
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software engineer based in CHarlotte NC, specializing in full stack
          web development, with experience in motion design, media creation,
          finance industry, game design and AI
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
      </div>

      <div className="mt-16 flex flex-wrap gap-12"></div>
    </section>
  );
};

export default About;
