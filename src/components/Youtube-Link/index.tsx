import { FaYoutube } from "react-icons/fa";

type YoutubeLinkProps = {
  url: string;
};

const YoutubeLink = ({ url }: YoutubeLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaYoutube color="red" />
    </a>
  );
};

export default YoutubeLink;
