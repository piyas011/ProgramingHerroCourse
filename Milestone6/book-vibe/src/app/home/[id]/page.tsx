import BookDetails from "@/components/bookDetails";
import { IBookType } from "@/components/type/type";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBookData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const bookData = await getBookData();
  const book = bookData.find((book: IBookType) => book.bookId === Number(id));
  console.log(book);
  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;
