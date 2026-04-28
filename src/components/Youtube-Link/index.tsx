import { FaYoutube } from "react-icons/fa";

type YoutubeLinkProps = {
  videoCode: string;
};

const youtubeLinkBuilder = (videoCode: string) => {
  return `https://www.youtube.com/watch?v=${videoCode}`;
};

const YoutubeLink = ({ videoCode }: YoutubeLinkProps) => {
  if (videoCode === "") {
    return;
  }
  const url = youtubeLinkBuilder(videoCode);
  return (
    <a
      className="flexListItem"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube color="red" size={24} />
    </a>
  );
};

export default YoutubeLink;
