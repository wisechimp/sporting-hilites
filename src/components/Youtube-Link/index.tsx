import { FaYoutube } from "react-icons/fa";

type YoutubeLinkProps = {
  videoCode: string;
};

const youtubeLinkBuilder = (videoCode: string) => {
  return `https://www.youtube.com/watch?v=${videoCode}`;
};

const YoutubeLink = ({ videoCode }: YoutubeLinkProps) => {
  const url = youtubeLinkBuilder(videoCode);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaYoutube color="red" />
    </a>
  );
};

export default YoutubeLink;
