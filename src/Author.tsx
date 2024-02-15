import { AuthorInfo } from "./types";

interface Props {
  authors: AuthorInfo[];
}

const Author = ({ authors }: Props) => (
  <div className="py-1">
    {authors.map((author, index) => (
      <span className="relative p-4" key={index}>
        <a
          className="text-2xl font-normal text-#0065a2 no-underline hover-text-#03396C"
          href={author.page}
          target="_blank"
        >
          {author.name}
        </a>
        <span className="font-normal text-sm absolute top-2 right-2 tracking-tight text-#555555">
          {author.ref}
        </span>
      </span>
    ))}
  </div>
);

export default Author;
