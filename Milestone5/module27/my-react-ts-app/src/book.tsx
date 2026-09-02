interface BooksProps {
  name: string;
}

export default function Books({ name }: BooksProps) {
  return <li> Books Name : {name}</li>;
}
