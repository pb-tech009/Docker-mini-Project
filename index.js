import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files (index.html auto-loaded)
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/products", (req, res) => {
    return res.json([
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
