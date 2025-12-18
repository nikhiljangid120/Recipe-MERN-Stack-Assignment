// Native fetch is available in Node 18+

async function testAI() {
    console.log("Testing AI Endpoint (Groq)...");
    try {
        const res = await fetch('http://localhost:5000/api/ai/explain', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                recipeName: "Test Recipe",
                instructions: "Step 1. Boil water. Step 2. Add magic powder."
            })
        });

        console.log("Status:", res.status);
        const data = await res.json();
        console.log("Response:", data);

        if (data.result && !data.result.includes("Simulated")) {
            console.log("SUCCESS: Received live response from Groq!");
        } else {
            console.log("NOTE: Received simulated response (Check Key/Quota)");
        }

    } catch (err) {
        console.error("Test failed:", err);
    }
}

testAI();
