async function sendToAI() {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "Analyzing...";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "user", content: `Analyze this for security issues:\n${input}` }
      ]
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || "No response.";
  outputDiv.innerText = result;
}
