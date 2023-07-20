import Title from "./Title";

const About = () => {
  return (
    <div className="wrapper">
      <Title text="About me" />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a Mexican computer science student with an interest in free software, electronics, 
          backend development, DevOps, unix-like systems, databases and someone else's computer.
        </p>
        <p>
          Feel free to contact me. I am always eager to learn about better practices and new stuff.
        </p>
      </div>
    </div>
  );
};

export default About;