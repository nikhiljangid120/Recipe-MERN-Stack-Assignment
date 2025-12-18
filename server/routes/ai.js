const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

// Initialize Groq
// Note: In production, ensure GROQ_API_KEY is set in .env
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || 'Provide-Key'
});

router.post('/suggest', async (req, res) => {
    try {
        const { ingredients } = req.body;
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: 'Ingredients are required' });
        }

        if (!process.env.GROQ_API_KEY) {
            console.log("No GROQ_API_KEY found, using simulation.");
            return res.json({
                result: "Simulated AI Response (Groq): Try making a vegetable stir-fry! (Configure API Key for real results)"
            });
        }

        // Using Llama-3.3-70b-versatile (Free tier compatible)
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Suggest 3 creative recipes I can make with these ingredients: ${ingredients.join(', ')}. Keep it concise and format as a list.`
                }
            ],
            model: "llama-3.3-70b-versatile",
        });

        const text = completion.choices[0]?.message?.content || "No suggestions found.";
        res.json({ result: text });

    } catch (err) {
        console.error("AI Error (Suggest):", err);
        if (err.message && (err.message.includes('429') || err.message.includes('quota'))) {
            return res.status(429).json({ error: "AI Quota Exceeded. Please try again later." });
        }
        res.status(500).json({ error: "Failed to fetch AI suggestions", details: err.message });
    }
});

router.post('/explain', async (req, res) => {
    try {
        const { recipeName, instructions } = req.body;

        if (!process.env.GROQ_API_KEY) {
            console.log("No GROQ_API_KEY found, using simulation.");
            return res.json({ result: `Simulated AI (Groq): Here is a simple summary of ${recipeName}... (Configure API Key for real results)` });
        }

        console.log(`Requesting explanation for: ${recipeName}`);

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Explain the recipe "${recipeName}" and its instructions in simple, easy-to-understand language. Summarize the key steps. Instructions: ${instructions}. Do NOT use markdown formatting like asterisks or bold text.`
                }
            ],
            model: "llama-3.3-70b-versatile",
        });

        const text = completion.choices[0]?.message?.content || "No explanation available.";
        res.json({ result: text });

    } catch (err) {
        console.error("AI Error (Explain):", err);
        if (err.message && (err.message.includes('429') || err.message.includes('quota'))) {
            return res.status(429).json({ error: "AI Quota Exceeded. Please try again later." });
        }
        res.status(500).json({ error: "Failed to fetch AI explanation", details: err.message });
    }
});

module.exports = router;
