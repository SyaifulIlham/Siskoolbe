import React, { useState, useRef } from 'react';
import "./Styling.css"
import CustomWidth from '../CustomWidth';
import { FaBackspace } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";




const FEditMurid = () => {
    const [formData, setFormData] = useState({
        nik: '',
        nama: '',
        email: '',
        Password: '',
        noHp: '',
        alamat: '',
        tempatLahir: '',
        tanggalLahir: '',
        nis: '',
        nisn: '',
        jenisKelamin: '',
        agama: '',
        jurusan: '',
        kelas: '',
        bukti: null,
        previewImage: null,
        imageName: ''
    });
    const Wmobile = CustomWidth() <= 767;
    const [showIcon, setShowIcon] = useState(true);
    const [showImageUP, setImageUp] = useState(true);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setShowIcon(false);
        setImageUp(false);
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImage(event.target.result);
                };
                reader.readAsDataURL(file);
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: event.target.result,
                    imageName: file.name
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: null,
                    imageName: file.name
                }));
                alert('Please choose an image file.');
            }
        } else {
            alert('No file selected.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setImageUp(false);
        setShowIcon(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImage(event.target.result);
                };
                reader.readAsDataURL(file);
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: event.target.result,
                    imageName: file.name
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: null,
                    imageName: file.name
                }));
            }
        } else {
            alert('No file dropped.');
        }
    };

    const handleDelete = () => {
        setImage(null);
        setImageUp(true);
        setShowIcon(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleBack = () => {
        window.history.back(); // Kembali ke halaman sebelumnya
    };



    return (
        <>
            {!Wmobile ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className='flex flex-row space-x-4 w-screen'>
                        <div className='mt-[20px]'>
                            <FaUserTie className='text-blue-700 text-[30px] bg-white rounded-full ' />
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl mt-4'>Murid</h1>
                        </div>
                        <div className='mt-[20px] w-screen' onClick={handleBack}>
                            <FaBackspace className='text-2xl ml-[930px]' />
                        </div>
                    </div>
                    <div className='container6  w-[1120px] overflow-y-auto mt-[12px] slim-scroll  h-[500px] pb-[20px]'>
                        <div className="flex flex-row " >
                            <div className="mr-4">
                                <label htmlFor="nik">Nik:</label>
                                <input type="text" placeholder='Masukan Nik' id="nik" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" name="nik" value={formData.nik} onChange={handleInputChange} />
                            </div>
                            <div className="mr-4">
                                <label htmlFor="nama">Nama:</label>
                                <input type="text" placeholder='Masukan Nama' id="nama" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    name="nama" value={formData.nama} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="mr-4">
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder='Masukan Email' id="email" name="email" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="mr-4">
                                <label htmlFor="nik">Password:</label>
                                <input type="text" id="nik" placeholder='Masukan Password' className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" name="Password" value={formData.Password} onChange={handleInputChange} />

                            </div>
                        </div>
                        <div className="flex flex-row  mt-4">
                            <div className="mr-4">
                                <label htmlFor="alamat">Alamat:</label>
                                <textarea id="alamat" name="alamat" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[70px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={formData.alamat}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="mr-4">
                                <label htmlFor="tempatLahir">Tempat Lahir:</label>
                                <textarea type="text" id="tempatLahir" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[70px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" name="tempatLahir" value={formData.tempatLahir} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="flex flex-row  mt-4">
                            <div className="mr-4">
                                <label htmlFor="tanggalLahir">Tanggal Lahir:</label>
                                <input type="date" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" id="tanggalLahir" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} />
                            </div>
                            <div className="mr-4">
                                <label htmlFor="nis">NIS:</label>
                                <input type="text" id="nis" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" name="nis" value={formData.nis} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="flex flex-row  mt-4">
                            <div className="mr-4">
                                <label htmlFor="nisn">NISN:</label>
                                <input type="text" id="nisn" name="nisn" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={formData.nisn} onChange={handleInputChange} />
                            </div>
                            <div className="mr-4">
                                <label htmlFor="jenisKelamin">Jenis Kelamin:</label>
                                <select id="jenisKelamin" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" name="jenisKelamin" value={formData.jenisKelamin} onChange={handleInputChange}>
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="laki-laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row  mt-4">
                            <div className="mr-4">
                                <label htmlFor="agama">Agama:</label>
                                <select id="agama" name="agama" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={formData.agama} onChange={handleInputChange}>
                                    <option value="">Pilih Agama</option>
                                    <option value="muslim">Muslim</option>
                                    <option value="non muslim">Non Muslim</option>
                                </select>
                            </div>
                            <div className="mr-4">
                                <label htmlFor="jurusan">Jurusan:</label>
                                <select id="jurusan" name="jurusan" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={formData.jurusan} onChange={handleInputChange}>
                                    <option value="">Pilih Jurusan</option>
                                    <option value="To1">To1</option>
                                    <option value="To2">To2</option>
                                    <option value="To3">To3</option>
                                    <option value="To4">To4</option>
                                    <option value="PerHotelan1">PerHotelan1</option>
                                    <option value="PerHotelan2">PerHotelan2</option>
                                    <option value="PPLG1">PPLG1</option>
                                    <option value="PPLG2">PPLG2</option>
                                    <option value="AKL1">AKL1</option>
                                    <option value="AKL2">AKL2</option>
                                    <option value="DKV1">DKV1</option>
                                    <option value="DKV2">DKV2</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row  mt-4">
                            <div className="mr-4">
                                <label htmlFor="kelas">Kelas:</label>
                                <select id="kelas" name="kelas" className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={formData.kelas} onChange={handleInputChange}>
                                    <option value="">Pilih Kelas</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className='mr-4'>
                                <label htmlFor="noHp">No HP:</label>
                                <input type="text" id="noHp"
                                    name="noHp"
                                    className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-[530px] h-[40px] pl-[20px] py-1 placeholder:text-[20px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={formData.noHp}
                                    onChange={handleInputChange} />


                            </div>
                        </div>
                        <div className='flex flex-row mt-4'>
                            <div className=''>
                                <label >Profile: </label>
                                {showImageUP && (
                                    <div
                                        onClick={() => fileInputRef.current.click()} // Memicu klik pada input file saat div diklik
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        className="border-[1px]  w-[530px] justify-center flex border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        required
                                    >
                                        <input
                                            type="file"
                                            name="bukti"
                                            id="bukti"
                                            accept="image/*"
                                            ref={fileInputRef} // Menghubungkan elemen input dengan useRef
                                            onChange={handleFileChange}
                                            className="hidden" // Menyembunyikan input file
                                        />
                                        {showIcon && (
                                            <div className="image-icon flex flex-col items-center pt-[50px] pb-[50px]">
                                                <BiImageAlt className="w-[50px] h-[50px] text-[#00000099]" />
                                                <div>
                                                    <h1 className="text-[20px] text-[#00000099] font-bold">Drag And Drop Here</h1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}


                                {image && (
                                    <div className='border-[1px] w-[530px] justify-center flex flex-col items-center border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ' >
                                        <div>
                                            <IoMdClose onClick={handleDelete} className="text-[white] text-[30px]  mt-[20px]" />
                                            <div>
                                                <img src={image} alt="Uploaded" className="w-auto z-0  " />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </form>




            ) : (
                <>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className=' justify-center items-center ml-2'>
                            <h1 className='font-bold text-[20px] mt-4'>Change User Information Here</h1>
                        </div>
                        <div className={`container5 items-center justify-center flex flex-col ${WMobile ? 'overflow-y-auto  slim-scroll t-[200px] h-[350px] pt-[50px] pb-[20px]' : DekstopLow ? 'overflow-y-auto slim-scroll h-96' : ''}`}>
                            <div className=" mb-4 flex flex-col justify-center items-center">

                                <div className=''>

                                    <label htmlFor="address" className="block text-sm " style={{ fontStyle: 'italic' }}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent p-[60px] py-1  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="address" className="block text-sm" style={{ fontStyle: 'italic' }}>
                                        Nama
                                    </label>

                                    <input
                                        type="Nama"
                                        id="Nama"
                                        name="Nama"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent  py-1 p-[60px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />
                                </div>



                                <div className=''>
                                    <label htmlFor="address" className="block text-sm" style={{ fontStyle: 'italic' }}>
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent  py-1 p-[60px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />
                                </div>



                                <div>
                                    <label htmlFor="address" className="block text-sm" style={{ fontStyle: 'italic' }}>
                                        NIS
                                    </label>
                                    <input
                                        type="text"
                                        id="nis"
                                        name="nis"
                                        value={formData.nis}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent p-[60px] py-1  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />
                                </div>
                                <div >
                                    <label htmlFor="address" className="block text-sm" style={{ fontStyle: 'italic' }}>
                                        NISN
                                    </label>
                                    <input
                                        type="text"
                                        id="nisn"
                                        name="nisn"
                                        value={formData.nisn}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent p-[60px] py-1  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />
                                </div>



                                <div>
                                    <label htmlFor="address" className="block text-sm" style={{ fontStyle: 'italic' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="block flex-1 border-[1px] border-black rounded-md bg-transparent p-[60px] py-1  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        autoComplete='none'
                                        required
                                    />

                                </div>
                            </div>
                        </div>



                    </form>
                </>
            )}
        </>
    );
};

export default FEditMurid;