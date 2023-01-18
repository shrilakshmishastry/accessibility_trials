import { Link } from "react-router-dom";
import './breadcrumb.scss';

const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <Link className="parent" to={'/'}>
            Accessibility Patterns
          </Link>
        </li>
        <li>
          <Link aria-current="page" site="breadcrumbpage" className="current" to={'/'}>
            BreadCrumb
          </Link>
        </li>
      </ol>
    </nav>
  );
}
export default BreadCrumb;