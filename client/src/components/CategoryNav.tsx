import '../assets/css/First.css';
import '../assets/css/Second.css';
import { categoryList } from '../types';

function CategoryNav() {
  return (
  <div className="Category-bar">
    <ul >

      {categoryList.map((category) => (
          <li className="unselected">
            {category.name}
          </li>
          ))}

    </ul>
    </div>
)
}

export default CategoryNav;

