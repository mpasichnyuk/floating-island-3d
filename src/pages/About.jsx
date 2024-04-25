/* eslint-disable react/jsx-key */
import CallToAction from "@/components/CTA";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello 👋 I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mikhail
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Full Stack Software Engineer with passion for quality software and
          enthusiasm for learning new technologies and approaches. Experience
          with Web Development technologies such as JavaScript, React, Ruby on
          Rails. <br />
          Additional experience includes 2D and 3D design, animation and motion
          graphics, game design and storytelling, video production and video
          editing. Problem-solving and analytical skills with strong
          communication and collaboration abilities.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="flex flex-col justify-center items-center">
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <p className="mt-2 text-slate-500">{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            These are highlights of my work experience. You can find full
            details at my
            <a
              className="text-cyan-500"
              target="_blank"
              href="https://www.linkedin.com/in/mpasichniuk/"
            >
              {" "}
              LinkedIn
            </a>
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name + experience.date}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      // className="w-[60%] h-[60%] object-contain"
                      className="object-contain rounded-full"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((p) => (
                    <li className="text-black-500/50 font-normal pl-1 text-sm">
                      {p}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CallToAction />
    </section>
  );
};

export default About;
