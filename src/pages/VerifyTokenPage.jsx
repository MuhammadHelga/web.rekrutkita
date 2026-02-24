import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyToken() {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const handleVerify = async () => {
        try {
            const response = await fetch(`https://n8n.rekrutkita.web.id/webhook/recruitment/verify-token`, {
                method: "POST",
                body: JSON.stringify({ token })
            });
            const data = await response.json();

            if (data.valid) {
                navigate("/wawancara", { state: { ...data.candidateData } });
            } else {
                alert("Token tidak valid atau sudah kadaluarsa!");
            }
        } catch (err) {
            alert("Terjadi kesalahan sistem.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Masukkan Token Wawancara</h2>
                <input 
                    className="w-full border p-2 rounded mb-4" 
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Contoh: XJ92KA"
                />
                <button onClick={handleVerify} className="w-full bg-[#0D2B45] text-white p-2 rounded">
                    Mulai Wawancara
                </button>
            </div>
        </div>
    );
}
