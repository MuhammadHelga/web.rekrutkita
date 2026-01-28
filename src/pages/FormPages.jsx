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
        <div className='h-screen w-full flex flex-col bg-white overflow-hidden font-sans'>
            <div className='bg-linear-to-b from-[#0D2B45] to-[#1a4b7a] w-full pt-10 pb-8 px-5 flex shrink-0'>
                <div className="max-w-2xl mx-auto">
                    <h1 className='text-white text-3xl font-bold tracking-[0.2em] mb-4'
                        >REKRUTMEN
                    </h1>
                    <p className="text-blue-100 max-w-md text-sm md:text-base mb-6">
                        Silakan lengkapi formulir di bawah ini untuk memulai proses wawancara
                    </p>
                    <div className="w-16 h-1.5 bg-[#FEBD5A] rounded-full"></div>
                </div>
            </div>

            <div className="grow overflow-y-auto w-full px-5 py-5 scrollbar-hide">
                <div className="w-full mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <label className='text-gray-600 text-sm font-semibold'>Nama Lengkap</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A] transition-all"
                                placeholder="Nama Lengkap"
                            />
                        </div>
        
                        <div className='mb-5'>
                            <label className='text-gray-600 text-sm font-semibold'>Nama Panggilan</label>
                            <input
                                type="text"
                                name="nickName"
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A] transition-all"
                                placeholder="Nama Panggilan"
                            />
                        </div>
        
                        <div className='mb-5'>
                            <label className='text-gray-600 text-sm font-semibold'>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A] transition-all"
                                placeholder="example@gmail.com"
                            />
                        </div>
        
                        <div className='mb-5'>
                            <label className='text-gray-600 text-sm font-semibold'>No. HP/Whatsapp</label>
                            <input
                                type="number"
                                name="number"
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A] transition-all"
                                placeholder="08xxxxxxxxxx"
                            />
                        </div>
        
                        <div className='grid grid-cols-2 gap-x-10 mb-10'>
                                <div>
                                    <label className='text-gray-600 text-sm font-semibold'>Jenis Kelamin</label>
                                    <select className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A]" name="gender" value={form.gender} onChange={handleChange}>
                                        <option value="Laki-Laki">Laki-Laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
        
                                <div>
                                    <label className='text-gray-600 text-sm font-semibold'>Bidang</label>
                                    <select className="w-full mt-1 p-3 rounded-xl outline-none border-2 border-gray-100 bg-gray-50 focus:border-[#FEBD5A]" name="role" value={form.role} onChange={handleChange}>
                                        <option value="Administrasi">Administrasi</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Gudang">Admin Gudang</option>
                                    </select>
                                </div>
                        </div>
        
                        <button className='w-full text-white text-lg bg-[#FEBD5A] p-3 rounded-xl hover hover:bg-[#e69c2d] shadow-lg active:scale-[0.98] transition-all'>Lanjut Wawancara</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormPages
