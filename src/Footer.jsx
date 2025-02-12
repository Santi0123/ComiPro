import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed", // Usa "absolute" si no quieres que sea fijo al hacer scroll
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#082E4D",
                color: "white",
                textAlign: "center",
                py: 2,
                boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
            }}
        >
            <Typography variant="body2">
                © 2025 ComiPro. Todos los derechos reservados.
            </Typography>
        </Box>
    );
}
