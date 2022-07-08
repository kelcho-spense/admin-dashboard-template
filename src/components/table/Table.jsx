import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        {
            id:112233,
            product: 'Acer Nitro 4',
            img:"https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelmain.png",
            customer: 'John Smith',
            date:"1 March ",
            amount: 587,
            method:"Cash on Delivery",
            status:'Approved',
        },
        {
            id:112233,
            product: 'Playstation 5',
            img:"https://media.wired.com/photos/629133e5e9a46d033b3380c7/master/pass/Finding-a-PlayStation-5-Is-About-to-Get-Easier-Gear-shutterstock_1855958302.jpg",
            customer: 'Mary Smith',
            date:"12 June ",
            amount: 5187,
            method:"Online Payment",
            status:'Pending',
        },
        {
            id:112233,
            product: 'Redragon s101',
            img:"https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
            customer: 'John Smith',
            date:"13 August ",
            amount: 7807,
            method:"Cash on Delivery",
            status:'Pending',
        },
        {
            id:112233,
            product: 'Blazer Blade 15',
            img:"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg",
            customer: 'Crish Smith',
            date:"5 April ",
            amount: 887,
            method:"Cash on Delivery",
            status:'Approved',
        },
        {
            id:112233,
            product: 'Asus ROG Strix',
            img:"https://sm.mashable.com/t/mashable_in/photo/default/asus-rog-strix-scar-g15-review_8wpm.h960.jpg",
            customer: 'Kelcho Spense',
            date:"6 May ",
            amount: 9887,
            method:"Cash on Delivery",
            status:'Pending',
        },
    ];
  return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Products</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} >
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell className="tableCell">
                            <div className="cellWrapper">
                                <img className="image" src={row.img} alt="img missing"/>
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.customer}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">{row.amount}</TableCell>
                        <TableCell className="tableCell">{row.method}</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>    
  )
}

export default List