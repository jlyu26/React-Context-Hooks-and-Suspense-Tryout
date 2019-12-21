import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {context => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//               <ul>
//                 <li style={{ background: theme.ui }}>book1</li>
//                 <li style={{ background: theme.ui }}>book2</li>
//                 <li style={{ background: theme.ui }}>book3</li>
//               </ul>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
