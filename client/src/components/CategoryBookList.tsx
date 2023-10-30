import   '../types';
import '../assets/css/First.css';
import '../assets/css/Second.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {bookList,BookItem} from "../types";

function CategoryBookList() {
  return (

          <div className="Category-page">
              <CategoryNav/>
              <div className="Book-boxes">
                  {bookList.map((book:BookItem) => (
                      <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}

              </div>
          </div>

)
}

export default CategoryBookList;
