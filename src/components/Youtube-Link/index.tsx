import { FaYoutube } from "react-icons/fa";

type YoutubeLinkProps = {
  // Change prop's name to video code or similar
  url: string;
};

// Create a Youtube Linkbuilder function that will create a link from the video's code

const YoutubeLink = ({ url }: YoutubeLinkProps) => {
  return (
    // url should become Youtube link created in the fuction
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaYoutube color="red" />
    </a>
  );
};

export default YoutubeLink;
