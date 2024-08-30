import React, { useState } from 'react';
import { Box, useTheme, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

// Dados de exemplo do histórico
const historyData = [
  {
    id: 1,
    title: "T1 - 0000",
    details: "MAC: 0000",
    additionalInfo: {
      details1: { text: "Foi para teste de conexão no dia 01/08/2024.", user: "Usuário 1" },
      details2: { text: "Detalhes da movimentação 1. Feito no dia 02/08/2024.", user: "Usuário 1" },
      details3: { text: "Detalhes da movimentação 1. Feito no dia 10/08/2024.", user: "Usuário 1" },
    },
  },
  {
    id: 2,
    title: "T2 - 0001",
    details: "MAC: 0001",
    additionalInfo: {
      details1: { text: "Informação adicional 2", user: "Usuário 2" },
    },
  },
  {
    id: 3,
    title: "T3 - 0002",
    details: "MAC: 0002",
    additionalInfo: {
      details1: { text: "Informação adicional 3", user: "Usuário 3" },
    },
  },
  {
    id: 4,
    title: "T4 - 0003",
    details: "MAC: 0003",
    additionalInfo: {
      details1: { text: "Informação adicional 4", user: "Usuário 4" },
    },
  },
  {
    id: 30,
    title: "T1 - 0030",
    details: "MAC: 0030",
    additionalInfo: {
      details1: { text: "Foi para teste de conexão no dia 01/08/2024.", user: "Usuário 1" },
      details2: { text: "Detalhes da movimentação 2. Feito no dia 02/08/2024.", user: "Usuário 1" },
      details3: { text: "Detalhes da movimentação 3. Feito no dia 10/08/2024.", user: "Usuário 1" },
    },
  },
  {
    id: 5,
    title: "T5 - 0004",
    details: "MAC: 0004",
    additionalInfo: {
      details1: { text: "Informação adicional 5", user: "Usuário 5" },
    },
  },
];

const modelOptions = ["T1", "T2", "T3", "T4", "T5"];

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchSerial, setSearchSerial] = useState("");

  const handleClearFilters = () => {
    setSearchName("");
    setSearchDate("");
    setSearchSerial("");
  };

  const filteredData = historyData.filter((entry) => {
    const entryDate = entry.details.match(/\d{2}\/\d{2}\/\d{4}/);
    const serialMatch = entry.details.match(/MAC: (\d+)/);
    const serialNumber = serialMatch ? serialMatch[1] : "";
    const modelName = entry.title.split(" - ")[0];

    // Verifica se a data de busca está presente nos detalhes adicionais
    const additionalDates = Object.values(entry.additionalInfo).some(info => info.text.includes(searchDate));

    return (
      modelName.toLowerCase().includes(searchName.toLowerCase()) &&
      (!searchDate || (entryDate && entryDate[0] === searchDate) || additionalDates) &&
      (!searchSerial || serialNumber.includes(searchSerial))
    );
  });

  return (
    <Box m="20px">
      <Header title="Histórico" subtitle="Página de Histórico de Movimentações" />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="search-name-label">Pesquisar por Modelo</InputLabel>
            <Select
              labelId="search-name-label"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              label="Pesquisar por Modelo"
            >
              {modelOptions.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Pesquisar por Data"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Pesquisar por Número de Série"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchSerial}
            onChange={(e) => setSearchSerial(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleClearFilters}
            sx={{ mt: 2 }}
          >
            Limpar Filtros
          </Button>
        </Grid>
      </Grid>
      {filteredData.map((entry) => (
        <Accordion key={entry.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {entry.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography><strong>Detalhes:</strong> {entry.details}</Typography>
            {Object.entries(entry.additionalInfo).map(([key, value]) => (
              <Box key={key} mb={2} p={2} border={1} borderColor="grey.300" borderRadius={4}>
                <Typography><strong>{key}:</strong> {value.text}</Typography>
                <Typography><strong>Usuário:</strong> {value.user}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default History;