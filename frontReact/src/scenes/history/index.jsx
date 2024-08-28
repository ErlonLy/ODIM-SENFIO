import { Box, useTheme } from "@mui/material";
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
    title: "Movimentação 1",
    details: "Detalhes da movimentação 1. Feito no dia 01/08/2024.",
  },
  {
    id: 2,
    title: "Movimentação 2",
    details: "Detalhes da movimentação 2. Feito no dia 05/08/2024.",
  },
  {
    id: 3,
    title: "Movimentação 3",
    details: "Detalhes da movimentação 3. Feito no dia 10/08/2024.",
  },
  {
    id: 4,
    title: "Movimentação 4",
    details: "Detalhes da movimentação 4. Feito no dia 15/08/2024.",
  },
  {
    id: 5,
    title: "Movimentação 5",
    details: "Detalhes da movimentação 5. Feito no dia 20/08/2024.",
  },
];

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Histórico" subtitle="Página de Histórico de Movimentações" />

      {historyData.map((entry) => (
        <Accordion key={entry.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {entry.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{entry.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default History;
