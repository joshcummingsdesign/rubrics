"use client";
import {
  styled,
  Table as TableBase,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const rows = [
  {
    name: "TF3I San Diego",
    date: "11/5/17",
    single: "32.64",
    average: "40.27",
    link: "https://www.worldcubeassociation.org/competitions/TF3ISanDiego2017",
  },
];

export default function Competitions() {
  return (
    <>
      <h1>Competitions</h1>
      <p>Competitions I've participated in.</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="center">Single</TableCell>
            <TableCell align="center">Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.name}
                </a>
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="center">{row.single}</TableCell>
              <TableCell align="center">{row.average}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

const Table = styled(TableBase)({
  "td, th": {
    width: "20%",

    "&:nth-child(1)": {
      width: "30%",
    },
  },
});
