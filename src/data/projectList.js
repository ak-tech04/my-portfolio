import reactIcon from "../assets/icons/react.png";
import vueIcon from "../assets/icons/vue.png";
import githubIcon from "../assets/icons/github.png";
import linkedInIcon from "../assets/icons/linkedin.png";
import journalIcon from "../assets/icons/journal.png";
import liveIcon from "../assets/icons/live.png";

export const projectList = [
  {
    projectTitle: "Some App1",
    projectDescription:
      "Now I’ll replace it with a reusable button supporting optional image path.",
    projectImagePath: "projects/some.png",
    techStackUsed: [
      { icon: reactIcon, name: "react" },
      { icon: vueIcon, name: "vue" },
    ],
    buttons: {
      liveUrl: { icon: liveIcon, text: "Live Demo" },
      sourceCode: { icon: githubIcon, text: "View Source Code" },
      journey: { icon: journalIcon, text: "Journal" },
    },
  },
  {
    projectTitle: "Some Appsss",
    projectDescription:
      "Now I’ll replace it with a reusable button supporting optional image path.",
    projectImagePath: "projects/some.png",
    techStackUsed: [
      { icon: reactIcon, name: "react" },
      { icon: vueIcon, name: "vue" },
    ],
    buttons: {
      liveUrl: { icon: liveIcon, text: "Live Demo" },
      sourceCode: { icon: githubIcon, text: "View Source Code" },
      journey: { icon: journalIcon, text: "Journal" },
    },
  },
];
