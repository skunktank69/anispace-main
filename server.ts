import express from "express";
const app = express();
const PORT = 3001;

const defaultText =
  "Optimizing Python loops and React components for performance";

app.get("/watch/:id/:ep", async (req, res) => {
  const { id, ep } = req.params;
  const d = await fetch(
    `https://aph-alpha.vercel.app/api/play/${id}?episodeId=${ep}`,
  ).then((data) => data.json());
  return res.json(d);
});

// ============================================================
// 6. START SERVER
// ============================================================
app.listen(PORT, () => {
  console.log(`Semantic tag sorter running at http://localhost:${PORT}`);
});
