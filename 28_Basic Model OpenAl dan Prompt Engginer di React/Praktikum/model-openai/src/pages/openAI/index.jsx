import Header from "@/components/header"
import OpenAI from "openai";
import { useEffect, useState } from "react";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const Aipages = () => {

    const defaultPrompt = `AI assistant who positions himself as a psychologist who knows mental health very well. Her assistants help answer questions and concerns related to mental health creatively, smartly, and very kindly. Jawablah menggunakan bahasa indonesia`;

    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await openai.chat.completions.create({
                messages: [{ role: "system", content: "Posisikan diri kamu adalah seorang psikolog yang sangat membantu, ramah, dan baik." }],
                model: "gpt-3.5-turbo",
                max_tokens: 100,
            });
            setResults(response.choices);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const userMsg = {
            message: {
                content: defaultPrompt + prompt,
                role: "user",
            },
        };
        const newData = [...results, userMsg];
        setResults(newData);
        setPrompt("");
        try {
            const response = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "gpt-3.5-turbo",
                max_tokens: 100,
            });
            const choice = response.choices[0];
            setResults([...newData, choice]);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };


    return (
        <>
            <Header />
            <div className="container mt-5 d-flex flex-column justify-content-center align-items-center border border-3 p-4 rounded-5">
                <h1>Open AI</h1>
                <h3>Konsultasikan kesehatan mental anda!</h3>
                <div className="my-2 p-4 border border-2 rounded-3 w-100">
                    {results.map((result) => (
                        <>

                            <p
                                className={
                                    result.message.role === "assistant" ? " rounded-3 p-2 me-auto" : " rounded-3 p-2 ms-auto"
                                }
                                key={result.message.content}
                                style={{ backgroundColor: '#a8a8a8', width: "fit-content", color: "#fff" }}
                            >
                                {result.message.role === "assistant" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-option me-2" viewBox="0 0 16 16">
                                    <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5zm10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
                                </svg> : ""}
                                {result.message.content.replace(defaultPrompt, "")}
                                {result.message.role === "user" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person ms-2" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg> : ""}
                            </p>
                        </>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="d-flex flex-row gap-2 w-100">
                    <input className="form-control" type="text" name="prompt" id="prompt" placeholder="Insert prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)} />
                    <button className="btn btn-secondary" type="submit"
                        disabled={isLoading}
                        aria-disabled={isLoading}>{isLoading ? "Loading" : "Submit"}</button>
                </form>
            </div>
        </>
    )
};

export default Aipages;