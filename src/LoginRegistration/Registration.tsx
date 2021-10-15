import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import axiosConnection from "../functions/axiosConnection";
import { Button, Checkbox, Input, MenuItem } from "@material-ui/core";
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function FetchMembers() {
  const conn = axiosConnection;
  const [members, setMembers] = useState({ data: [] });

  const fetchMembers = async () => {
    try {
      await conn.get("fetchMembers").then((response) => {
        setMembers(response.data);
        console.log("Fetched: " + members);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);
  const [hide, setHide] = useState(false);

    const toggleHide = () => {
      setHide((oldState) => !oldState);
    };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Member Number</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Middle Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Tax Identification Number</StyledTableCell>
              <StyledTableCell>Option</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.data.map((member) => {
              return (
                <>
                  <StyledTableRow  key={member["id"]}>
                    <StyledTableCell>{member["member_number"]}</StyledTableCell>
                    <StyledTableCell>{member["first_name"]}</StyledTableCell>
                    <StyledTableCell>{member["middle_name"]}</StyledTableCell>
                    <StyledTableCell>{member["last_name"]}</StyledTableCell>
                    <StyledTableCell>{member["tax_identification_number"]}</StyledTableCell>
                    <StyledTableCell>
                      <MenuItem>
                        <Button onClick={toggleHide}></Button>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox onChange={toggleHide} />
                      </MenuItem>
                    </StyledTableCell>
                  </StyledTableRow>
                  {hide && (
                    <StyledTableRow  key={member["id"]}>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                      <StyledTableCell>THIS LINE WAS HIDDEN</StyledTableCell>
                    </StyledTableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FetchMembers;
