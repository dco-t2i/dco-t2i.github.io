import { AuthorInfo } from "./types";

interface Props {
  authors: AuthorInfo[];
}

const Author = ({ authors }: Props) => (
  <div className="py-1">
    {authors.map((author, index) => (
      <span className="relative p-4" key={index}>
        <span className="text-2xl font-normal text-#555555">{author.name}</span>
        <span className="font-normal text-sm absolute top-4 right-2 tracking-tight">
          {author.ref}
        </span>
      </span>
    ))}
  </div>
);

export default Author;
