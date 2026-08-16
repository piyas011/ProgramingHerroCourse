type Gender = "Male" | "Female" | "Private";
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 19.99,
  },
  {
    id: 2,
    name: "Another Product",
    price: 29.99,
    description: "This is another product.",
  },
];
