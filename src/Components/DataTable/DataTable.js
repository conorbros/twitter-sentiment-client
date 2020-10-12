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

export default function TableData({
  titles,
  data,
  className,
  keyword,
  multikey,
}) {
  return (
    <div className={`table ${className}`}>
      <TableContainer
        component={Paper}
        className={`table__container ${
          data[keyword].length !== 0 ? "show" : "hide"
        }`}
      >
        <Table aria-label="custom pagination table" stickyHeader>
          <TableHead>
            <TableRow>
              {titles.map((title) => (
                <TableCell key={title}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {multikey
              ? Array.from({ length: data[keyword].length }).map(
                  (_, _index) => {
                    return (
                      <TableRow key={_index} className="table__row">
                        {titles.map((_, index) => {
                          const fieldName = titles[index];
                          return (
                            <TableCell key={index} component="th" scope="row">
                              {data[fieldName][_index]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  }
                )
              : data[keyword].map((row, index) => (
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
