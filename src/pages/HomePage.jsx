import { Container, Typography, Card, CardContent } from "@mui/material";

export default function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Desafio React - Gestão de Secretarias
          </Typography>
          <Typography variant="body1" paragraph>
            Este projeto foi desenvolvido como parte do desafio técnico para criar
            uma aplicação de gestão de secretarias. O sistema permite:
          </Typography>
          <ul>
            <li>Cadastrar novas secretarias com nome, email e telefone</li>
            <li>Listar todas as secretarias cadastradas</li>
            <li>Excluir secretarias existentes</li>
            <li>Exibir feedback visual de sucesso ou erro</li>
          </ul>
          <Typography variant="body2" color="text.secondary">
            Tecnologias utilizadas: React, Vite, Material UI, React Query.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
