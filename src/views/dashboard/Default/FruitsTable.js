import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import FruitsInfoModal from './FruitsInfoModal';

function createData(name, color, freshness, carbs, protein) {
    return { name, color, freshness, carbs, protein };
}

const rows = [
    createData('Orange', 'Orange', 60.0, 24, 4.0),
    createData('Apple', 'Red', 20.0, 37, 4.3),
    createData('Grapes', 'grape', 90.0, 24, 6.0)
    // createData('Cupcake', '305', 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function FruitsTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <FruitsInfoModal open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Fruit name</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Freshness %</TableCell>
                            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">
                                    <Button
                                        variant="text"
                                        onClick={() => {
                                            handleClickOpen();
                                        }}
                                    >
                                        {row.name}
                                    </Button>
                                </TableCell>
                                <TableCell align="right">{row.color}</TableCell>
                                <TableCell align="right">{row.freshness}</TableCell>
                                {/* <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
