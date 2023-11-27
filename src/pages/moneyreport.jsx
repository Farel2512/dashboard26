import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(id, periode, pendapatan, pajak, totalpendapatan, status) {
  return { id, periode, pendapatan, pajak, totalpendapatan, status };
}

const rows = [
  createData(0, 'Januari', 'Rp.1.000.000', 'Rp.400.000', 'Rp.600.000', 'Lunas'),
  createData(1, 'Februari', 'Rp.1.400.000', 'Rp.500.000', 'Rp.900.000', 'Lunas'),
  createData(2, 'Maret', 'Rp.1.300.000', 'Rp.400.000', 'Rp.900.000', 'Lunas'),
  createData(3, 'April', 'Rp.900.000', 'Rp.300.000', 'Rp.600.000', 'Pending...'),
  createData(4, 'Mei', 'Rp.1.800.000', 'Rp.300.000', 'Rp.1.500.000', 'Pending...'),
  createData(5, 'Juni', 'Rp.2.200.000', 'Rp.200.000', 'Rp.2.000.000', 'Lunas'),
  createData(6, 'Juli', 'Rp.1.700.000', 'Rp.200.000', 'Rp.1.500.000', 'Lunas'),
  createData(7, 'Agustus', 'Rp.2.150.000', 'Rp.150.000', 'Rp.2.000.000', 'Pending..'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Periode</TableCell>
            <TableCell align="center">Pendapatan</TableCell>
            <TableCell align="center">Pajak</TableCell>
            <TableCell align="center">Total Pendapatan</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.periode}</TableCell>
              <TableCell align="center">{row.pendapatan}</TableCell>
              <TableCell align="center">{row.pajak}</TableCell>
              <TableCell align="center">{row.totalpendapatan}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>See more orders</div>
      </Link>
    </React.Fragment>
  );
}
