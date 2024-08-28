import React from 'react';
import { Box, useTheme, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMovement } from "../../data/mockData";
import Header from "../../components/Header";

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
];

const baseOptions = [
  { value: 'active', label: 'RHP' },
  { value: 'inactive', label: 'Hemorio' },
  { value: 'pending', label: 'Hemobra' },
];


const Movement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { //Tipo de dispositivo
      field: "id_dispositivo", 
      headerName: "Dispositivo" ,
      cellClassName: "name-column--cell",
    },

    { //Numer de série
      field: "nome",
      headerName: "Numero de serie",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    { //Escolhas de cliente
      field:"base",
      headerName:"Cliente",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ ...params.row, status: newValue }]);
          }}
        >
          {baseOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ),
    },

    { //Data inicial
      field: "date",
      headerName: "Data de uso",
      flex: 1,
    },

    { //Data de entrega
      field: "date2",
      headerName: "Data de entrega",
      flex: 1,
    },

    { //status
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ ...params.row, status: newValue }]);
          }}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ),
    },

  ];

  return (
    <Box m="20px">
      <Header title="Estágios de Movimentação" subtitle="Andamento dos dispositivos" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataMovement} columns={columns} />
      </Box>
    </Box>
  );
};

export default Movement;
