"use client";
import {
  styled,
  Table as TableBase,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface Row {
  brand: string;
  name: string;
  year: string;
  link: string;
  main?: boolean;
}

const rows: Row[] = [
  {
    brand: "MoYu",
    name: "RS3 M (UV Coated)",
    year: "2020",
    link: "https://www.thecubicle.com/products/moyu-rs3-m-2020-3x3-uv-coated",
    main: true,
  },
  {
    brand: "QiYi",
    name: "Valk 3 Power M",
    year: "2017",
    link: "https://www.thecubicle.com/products/valk-3-power-m",
  },
  {
    brand: "QiYi",
    name: "Valk 3",
    year: "2016",
    link: "https://www.thecubicle.com/products/valk-3?variant=13215305531465",
  },
];

export default function Content() {
  return (
    <>
      <h1>Cubes</h1>
      <p>The cubes I am currently solving with.</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
            <TableCell align="center">Main</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.brand}</TableCell>
              <TableCell>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.name}
                </a>
              </TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell align="center">{row.main ? "✅" : ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

const Table = styled(TableBase)({
  "td, th": {
    width: "22%",

    "&:nth-child(2)": {
      width: "43%",
    },

    "&:nth-child(3)": {
      width: "20%",
    },

    "&:nth-child(4)": {
      width: "15%",
    },
  },
});
