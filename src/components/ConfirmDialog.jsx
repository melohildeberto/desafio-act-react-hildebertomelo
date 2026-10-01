import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export default function ConfirmDialog({ open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Confirmação</DialogTitle>
      <DialogContent>
        <p>Deseja realmente excluir esta secretaria?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button onClick={onConfirm} color="error" variant="contained">Excluir</Button>
      </DialogActions>
    </Dialog>
  );
}
