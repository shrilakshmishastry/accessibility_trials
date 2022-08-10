import './customer.scss';
import LeftNavBar from './LeftNavBar';
import MainContentRender from './MainContentRender';
const Customers = () => {
  return (
    <div className='customerContainer'>
      <LeftNavBar />
      <MainContentRender />
    </div>
  );
}
export default Customers;