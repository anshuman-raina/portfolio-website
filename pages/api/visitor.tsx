import { NextApiRequest, NextApiResponse } from "next";
import { database, ref, get, set } from "@/lib/firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const visitorRef = ref(database, "visitorCount");

    try {
      const snapshot = await get(visitorRef);
      let currentCount = snapshot.exists() ? snapshot.val() : 230;
      currentCount += 1;

      await set(visitorRef, currentCount);
      return res.status(200).json({ count: currentCount });
    } catch (error) {
      return res.status(500).json({ error: "Failed to update visitor count." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}