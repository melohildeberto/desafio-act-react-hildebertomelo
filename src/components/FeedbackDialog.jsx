import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export default function FeedbackDialog({ open, onClose, title, message, type }) {
  const getColor = () => {
    switch (type) {
      case "success": return "green";
      case "error": return "red";
      case "warning": return "orange";
      default: return "black";
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: getColor() }}>{title}</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
