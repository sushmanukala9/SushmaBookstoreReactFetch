// Contains all the custom types we want to use for our application

export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}

export const categoryList = [
  { categoryId: 1001, name: "Favourites" },
  { categoryId: 1002, name: "Best Sellers" },
  { categoryId: 1003, name: "New Releases" },
  { categoryId: 1004, name: "Science Fiction" },
  { categoryId: 1001, name: "History" },
  { categoryId: 1002, name: "Romance" },
  { categoryId: 1003, name: "Fiction" },
  { categoryId: 1004, name: "Comics" },
];

export const bookList = [
  {
    bookId: 1001,
    title: "House of Sky & Breath",
    author: "Sara J Maas",
    price: 699,
    isPublic: true,
  },
  {
    bookId: 1002,
    title: "Fahrenheit 451",
    author: "Ray D Bradbury",
    price: 1399,
    isPublic: false,
  },
  {
    bookId: 1003,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 599,
    isPublic: true,
  },
  {
    bookId: 1004,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 699,
    isPublic: false,
  },
  {
    bookId: 1005,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 699,
    isPublic: true,
  },
  {
    bookId: 1006,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 699,
    isPublic: true,
  },
];