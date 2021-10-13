import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosConnection from "../functions/axiosConnection";

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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member Number</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Tax Identification Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.data.map((member) => {
              return (
                <>
                  <TableRow key={member["id"]}>
                    <TableCell>{member["member_number"]}</TableCell>
                    <TableCell>{member["first_name"]}</TableCell>
                    <TableCell>{member["middle_name"]}</TableCell>
                    <TableCell>{member["last_name"]}</TableCell>
                    <TableCell>{member["tax_identification_number"]}</TableCell>
                  </TableRow>
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
