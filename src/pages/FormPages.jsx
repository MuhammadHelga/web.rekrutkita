import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendFormData } from "../services/ApiRequests";

function FormPages() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        nickName: "",
        email: "",
        number: "",
        gender: "Laki-Laki",
        role: "Administrasi",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const generateCandidateId = () => {
        const random = Math.floor(Math.random() * 9999);
        return `K${random.toString().padStart(4, "0")}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            candidateId: generateCandidateId(),
            ...form,
        };

        try {
            await sendFormData(payload);
            navigate("/wawancara", {
                state: {
                userName: form.nickName || form.fullName,
                fullName: form.fullName,
                email: form.email,
                role: form.role,
                candidateId: payload.candidateId,
                },
            });
        } catch (error) {
            alert("Gagal mengirim data");
        }
    };

    return (
        <div className=' bg-[#5046E5] h-screen w-full items-center justify-center px-10 py-15'>
            <div className='w-full bg-transparent'>
                <h1 className='text-center text-white text-3xl font-bold mb-8'>REKRUTMEN</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label className='text-white text-sm'>Nama Lengkap</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white"
                        placeholder="Nama Lengkap"
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-white text-sm'>Nama Panggilan</label>
                    <input
                        type="text"
                        name="nickName"
                        required
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white"
                        placeholder="Nama Panggilan"
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-white text-sm'>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white"
                        placeholder="example@gmail.com"
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-white text-sm'>No. HP/Whatsapp</label>
                    <input
                        type="number"
                        name="number"
                        required
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white"
                        placeholder="08xxxxxxxxxx"
                    />
                </div>

                <div className='grid grid-cols-2 gap-x-10 mb-10'>
                        <div>
                            <label className='text-white text-sm'>Jenis Kelamin</label>
                            <select className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white" name="gender" value={form.gender} onChange={handleChange}>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>

                        <div>
                            <label className='text-white text-sm'>Bidang</label>
                            <select className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-[#FEBD5A] bg-white" name="role" value={form.role} onChange={handleChange}>
                                <option value="Administrasi">Administrasi</option>
                                <option value="Sales">Sales</option>
                                <option value="Gudang">Admin Gudang</option>
                            </select>
                        </div>
                </div>

                <button className='w-full text-white text-lg bg-[#FEBD5A] p-3 rounded-xl hover hover:bg-[#e69c2d]'>Lanjut Wawancara</button>
            </form>
        </div>
    )
}

export default FormPages
