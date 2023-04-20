import db from '@/database/db';

export const getAllBook = async () => {
  await db.read();

  return db.data.books;
}

export const getAllBookId = async () => {
  await db.read();

  const bookIds = db.data.books.map(b => b.id);
  return bookIds; //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}

export const getDetailBook = async (id) => {
  await db.read();

  const book = db.data.books.find(b => b.id === id);
  return book;
}