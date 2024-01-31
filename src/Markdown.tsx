import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

const Markdown = ({ text }: Props) => <ReactMarkdown>{text}</ReactMarkdown>;

export default Markdown;
