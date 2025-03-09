import { database, ref, get, set } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const visitorRef = ref(database, "visitorCount");

    try {
      // 🔹 Read visitor count from Firebase
      const snapshot = await get(visitorRef);
      let currentCount = snapshot.exists() ? snapshot.val() : 230;

      // 🔹 Increment count
      currentCount += 1;
      await set(visitorRef, currentCount);

      // ✅ Fix CORS issue
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

      res.status(200).json({ count: currentCount });
    } catch (error) {
      res.status(500).json({ error: "Failed to update visitor count." });
    }
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(405).json({ message: "Method Not Allowed" });
  }
}
