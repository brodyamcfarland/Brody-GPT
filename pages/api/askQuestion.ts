import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../utils/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

interface Data {
    answer: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt!" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please provid a valid chat ID!" });
        return;
    }

    // Chat GPT Query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text:
            response ||
            "BrodyGPT was unable to find an answer or the servers are congested.",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "BrodyGPT",
            name: "BrodyGPT",
            avatar: "https://imgur.com/a/F4Oz57A",
        },
    };

    await adminDb
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({ answer: message.text });
}
