const BookTableHead = () => (
  <thead>
    <tr>
      <td>Titre</td>
      <td>Auteur</td>
      <td>Categorie</td>
    </tr>
  </thead>
);

const BookTableRow = ({ id, title, author, category, onSelect }) => (
  <tr onClick={() => onSelect(id)}>
    <td>{title}</td>
    <td>{author}</td>
    <td>{category}</td>
  </tr>
);

const BookTable = ({ books, onSelectBook }) => (
  <table>
    <BookTableHead />
    <tbody>
      {books.map(book => (
        <BookTableRow {...book} key={book.id}
          onSelect={onSelectBook} />
      ))}
    </tbody>
  </table>
);

BookTable.defaultProps = {
  books: [],
  onSelectBook: () => {}
}

export default BookTable;