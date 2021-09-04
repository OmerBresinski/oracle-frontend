import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table as MuiTable } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as S from "./style";

const useStyles = makeStyles({
  tableCell: {
    fontFamily: "Cabin, Arial",
  },
});

const Table = ({ rows, cols }) => {
  const classes = useStyles();
  return (
    <S.Table>
      <TableContainer component={Paper}>
        <MuiTable aria-label="table">
          <TableHead>
            <TableRow>
              {cols?.map(({ name }, index) => (
                <TableCell
                  key={index}
                  className={classes.tableCell}
                  align={!index ? "left" : "center"}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow key={index}>
                {row.map((item, index) => (
                  <TableCell
                    key={index}
                    align={!index ? "left" : "center"}
                    component="th"
                    scope="row"
                    className={classes.tableCell}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </S.Table>
  );
};

export default Table;
