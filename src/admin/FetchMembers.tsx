import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import "../App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosConnection from "../functions/axiosConnection";
import { Button, Checkbox, Input, MenuItem } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function FetchMembers() {
  const conn = axiosConnection;
  const [members, setMembers] = useState({ data: [] });
  const [open, setOpen] = React.useState(false);

  const fetchMembers = async () => {
    try {
      await conn.get("members").then((response) => {
        setMembers({ data: response.data });
        console.log("Fetched: " + members);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);
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
                  <StyledTableRow key={member["id"]}>
                    <StyledTableCell>{member["member_number"]}</StyledTableCell>
                    <StyledTableCell>{member["first_name"]}</StyledTableCell>
                    <StyledTableCell>{member["middle_name"]}</StyledTableCell>
                    <StyledTableCell>{member["last_name"]}</StyledTableCell>
                    <StyledTableCell>
                      {member["tax_identification_number"]}
                    </StyledTableCell>
                    <StyledTableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? <Button>-</Button> : <Button>+</Button>}
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <select>
                        <option value="" label="Gender" />
                        <option value="Male" label="Male" />
                        <option value="Female" label="Female" />
                        <option value="other" label="other" />
                      </select>
                      <select>
                        <option value="" label="Civil Status" />
                        <option value="Single" label="Single" />
                        <option value="Married" label="Married" />
                        <option value="Separated" label="Separated" />
                        <option value="Widowed" label="Widowed" />
                      </select>
                      <select>
                        <option value="" label="Religion" />
                        <option value="A" label="A" />
                        <option value="B" label="B" />
                        <option value="C" label="C" />
                        <option value="D" label="D" />
                      </select>
                    </Collapse>
                  </StyledTableRow>
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
