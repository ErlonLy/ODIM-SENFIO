import React, { useState } from 'react';
import { Box, useTheme, Select, MenuItem, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMovement } from "../../data/mockData";
import Header from "../../components/Header";

const statusOptions = [
  { value: 'active', label: 'Checar base' },
  { value: 'inactive', label: 'Não liga' },
  { value: 'pending', label: 'Ajuste calibração' },
];

const baseOptions = [
  { value: 'active', label: 'RHP' },
  { value: 'inactive', label: 'Hemorio' },
  { value: 'pending', label: 'Hemobra' },
];

const processOptions = [
  { value: 'active', label: 'Em Calib' },
  { value: 'inactive', label: 'Em Conexão' },
  { value: 'pending', label: 'De teste para manutenção' },
];

const dispoOptions = [
  { value: 'T1', label: 'T1' },
  { value: 'T2', label: 'T2' },
  { value: 'T3', label: 'T3' },
];

const Movement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockDataMovement);
  const [newItem, setNewItem] = useState({
    id_dispositivo: '',
    nome: '',
    base: '',
    date: '',
    process: '',
    status: '',
  });

  const handleAddItem = () => {
    setRows([{ id: rows.length + 1, ...newItem }, ...rows]);
    setNewItem({
      id_dispositivo: '',
      nome: '',
      base: '',
      date: '',
      process: '',
      status: '',
    });
  };

  const columns = [
    { //Tipo de dispositivo
      field: "id_dispositivo", 
      headerName: "Dispositivo" ,
      cellClassName: "name-column--cell",
    },
    { //Número de série
      field: "nome",
      headerName: "Número de série",
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
            params.api.updateRows([{ ...params.row, base: newValue }]);
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
    { //status
      field: "process",
      headerName: "Procedimento",
      flex: 1,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ ...params.row, process: newValue }]);
          }}
        >
          {processOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    { //Data de entrega
      field: "date2",
      headerName: "Data de entrega",
      flex: 1,
      renderCell: (params) => (
        <TextField
          type="date"
          value={params.value}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ ...params.row, date2: newValue }]);
          }}
          InputLabelProps={{ shrink: true }}
        />
      ),
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
      
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Select
          value={newItem.id_dispositivo}
          onChange={(e) => setNewItem({ ...newItem, id_dispositivo: e.target.value })}
          displayEmpty
        >
          <MenuItem value="" disabled>Dispositivo</MenuItem>
          {dispoOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Número de série"
          value={newItem.nome}
          onChange={(e) => setNewItem({ ...newItem, nome: e.target.value })}
          inputProps={{ maxLength: 4 }}
          inputMode="numeric"
        />
        <Select
          value={newItem.base}
          onChange={(e) => setNewItem({ ...newItem, base: e.target.value })}
          displayEmpty
        >
          <MenuItem value="" disabled>Cliente</MenuItem>
          {baseOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Data de Entrada"
          type="date"
          value={newItem.date}
          onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <Select
          value={newItem.process}
          onChange={(e) => setNewItem({ ...newItem, process: e.target.value })}
          displayEmpty
        >
          <MenuItem value="" disabled>Procedimento</MenuItem>
          {processOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={newItem.status}
          onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
          displayEmpty
        >
          <MenuItem value="" disabled>Status</MenuItem>
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Adicionar
        </Button>
      </Box>
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
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Movement;