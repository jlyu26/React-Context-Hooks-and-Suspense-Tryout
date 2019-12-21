import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

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
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ui }}>book1</li>
        <li style={{ background: theme.ui }}>book2</li>
        <li style={{ background: theme.ui }}>book3</li>
      </ul>
    </div>
  );
};

export default BookList;
