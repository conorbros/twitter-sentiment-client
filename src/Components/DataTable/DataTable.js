import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

export default function TableData({ title, data, className }) {
  return (
    <div className={`table ${className}`}>
      <TableContainer
        component={Paper}
        className={`table__container ${data.length !== 0 ? "show" : "hide"}`}
      >
        <Table aria-label="custom pagination table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="table__row">
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
