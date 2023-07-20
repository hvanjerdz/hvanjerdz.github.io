import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import TechContainer from "./TechContainer";

const Technologies = () => {
  return (
    <div className="wrapper">
      <Title text="Languages and Technologies" />
      <div className="flex gap-4 flex-wrap">

        <TechContainer title="Bash" link="https://www.gnu.org/software/bash/" />
        <TechContainer title="C/C++" link="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html" />
        <TechContainer title="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <TechContainer title="DBeaver" link="https://dbeaver.io/" />
        <TechContainer title="Distrobox" link="https://github.com/89luca89/distrobox" />
        <TechContainer title="Docker" link="https://www.docker.com/" />
        <TechContainer title="Git" link="https://git-scm.com/" />
        <TechContainer title="Github" link="https://github.com/" />
        <TechContainer title="HTML" link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
        <TechContainer title="Java" link="https://www.java.com/en/" />
        <TechContainer title="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/javascript" />
        <TechContainer title="Linux" link="https://github.com/torvalds/linux" />
        <TechContainer title="MySQL" link="https://www.mysql.com/" />
        <TechContainer title="Nextjs" link="https://nextjs.org/" />
        <TechContainer title="Podman" link="https://podman.io/" />
        <TechContainer title="SQL Server" link="https://www.microsoft.com/en-us/sql-server/sql-server-2022" />
        <TechContainer title="Tailwindcss" link="https://tailwindcss.com/" />
        <TechContainer title="TypeScript" link="https://www.typescriptlang.org`" />
        <TechContainer title="Vim" link="https://www.vim.org/" />
        <TechContainer title="VSCodium" link="https://vscodium.com/" />
      </div>
    </div>
  );
};

export default Technologies;