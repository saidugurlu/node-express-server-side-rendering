import axios from "axios";

const nouns = (
  await axios.get("https://edwardtanguay.netlify.app/share/germanNouns.json")
).data;

const getJobs = () => {
  return [
    {
      idCode: "nnn",
    },
    {
      idCode: "000",
    },
  ];
};
export const siteModal = {
  nouns,
  jobs: getJobs(),
};
