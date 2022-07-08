import './single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
     <Sidebar /> 
     <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className='title'>Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/1819791/pexels-photo-1819791.jpeg?cs=srgb&dl=pexels-fabio-lange-1819791.jpg&fm=jpg"
             alt="singleimg" className="itemImg" />
             <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">Jane@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">64 Kagio,kirinyaga</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Kenya</span>
              </div>
             </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending (last 6 months)" />
        </div>
      </div>
      <div className="bottom">
      <h1 className='title'>Last Transactions</h1>
        <List />
      </div>
     </div>
    </div>
  )
}

export default Single