import './Header.css';
export default function Header() {
  return (
    <div className="header">
        <div className='header-left'>
                <h3>Invoice to:</h3>
                <p>Customer Name</p>
                <h3>Customer Address</h3>
                <p>Address Line 1</p>
                <p>Address Line 2</p>
                <p>Address Line 3</p>
        </div>
        <div className='header-right'>
                <h3>Invoice No.</h3>
                <p>671298</p>
                <h3>Date</h3>
                <p>18.06.22</p>

        </div>
    </div>
  )
}
