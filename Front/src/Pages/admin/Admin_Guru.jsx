import React, { useEffect, useState } from "react";
import SidebarAdmin from "../../components/admin/SidebarAdm";
import { FaUserTie } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { BsFillTrash3Fill } from "react-icons/bs";
import CustomWidth from "../../CustomWidth";
import _debounce from "lodash/debounce";
import api from "../../api";
import Swal from "sweetalert2";

const Adminguru = () => {
  const navTo = useNavigate();
  const Wmobile = CustomWidth() <= 767;
  const DekstopLow = CustomWidth() <= 1366;
  const [guru, setGuru] = useState([]);

  const getGuru = _debounce(async () => {
    try{
    const resp = await api.get("/getGuru_Admin");
    resp.status === 200 && setGuru(resp.data);
    console.log(resp.data);
    }catch(err){

    }
  }, 50)

  const deleteGuru = async (id) => {
    Swal.fire({
      title: 'Yakin ingin menghapus guru?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if(result.isConfirmed){
        try{
          const resp = await api.post(`/deleteGuru_Admin/${id}`);
          if(resp.status === 200){
            Swal.fire(
              'Berhasil!',
              'Guru telah dihapus.',
              'success'
            ).then(() => {
              window.location.reload();
            });
          }else{
            Swal.fire(
              'Gagal!',
              'Guru gagal dihapus.',
              'error'
            );
          }
        }catch(err){
          Swal.fire(
            'Gagal!',
            'Guru gagal dihapus.',
            'error'
          )
        }
      }
    })
  }

  useEffect(() => {
    getGuru();
  },[])

  return (
    <>
      {!Wmobile ? (
      <div className="flex flex-col w-full font-inter h-full">
        <div className={`flex flex-col h-full bg-[#D9D9D9] mx-4 rounded-3xl py-8`}>
          <div className="flex space-x-2 mx-6 lg:px-6 sm:px-7 bg-blue-500 py-4 text-white"
          style={{borderRadius: '10px 10px 0 0'}}>
            <FaUserTie className="w-12 h-12 bg-white rounded-full px-2 text-black" />
            <span className="font-semibold text-2xl font-inter mt-2">Guru</span>
          </div>
          <div className="flex justify-between mx-6 sm:px-8 lg:px-7 bg-white py-4">
            <div class="max-w-md flex">
              <div class="relative flex w-full h-12 rounded-lg focus-within:shadow-lg  bg-white overflow-hidden border-2 border-solid border-black">
                <div class="grid place-items-center h-full w-12 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  class="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Mencari Data Guru" />
              </div>
            </div>
            <button onClick={() => navTo('/Siskoolbe/Admin/TambahGuru')} className="flex bg-[#1E6CB1] w-40 h-10 items-center justify-center rounded-[10px]">
              <FaPlus className="" style={{ color: '#FFFF' }} />
              <span className="text-white border-0  mx-2 font-inter text-sm">Tambah Guru</span>
            </button>
          </div>
          <div className="flex flex-col bg-white mx-6 h-full"
          style={{borderRadius: '0 0 10px 10px'}}>
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 h-full mb-8">
              <div className="py-2 inline-block min-w-full sm:px-8 lg:px-6">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-blue-500 border border-1 border-gray-400"
                    style={{borderRadius: '10px 10px 0 0'}}>
                      <tr className="px-3 text-white">
                        <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                          No
                        </th>
                        <th scope="col" className="text-sm font-medium px-1 py-2 text-center ">
                          Nama
                        </th>
                        <th scope="col" className="text-sm font-medium px-0 py-3 text-center ">
                          Jabatan
                        </th>
                        <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                          Status
                        </th>
                        <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                          No Hp
                        </th>
                        <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                          Opsi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white border-1 border">
                      {guru && guru.length > 0 ? (
                        guru.map((Guru, index) => (
                      <tr className="" style={{ borderRadius: '24px' }}>
                        <td className="px-2 py-2 text-sm font-medium text-gray-900 text-center">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-[-15px] py-2">
                          <div className="flex space-x-1 w-24 px-0 mx-auto items-center">
                            <div style={{position: 'relative', display: 'inline-block'}}>
                              <img className="w-10 h-10 mr-4 rounded-full object-cover" 
                              src={`data:image/png;base64,${Guru.gambar_profil}`} 
                              onError={e => e.target.src = `"https://i.pinimg.com/564x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg"`} alt="" />
                            </div>
                            <span className="items-center font-inter font-medium text-sm">{Guru.nama}</span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-medium px-0 py-2 text-center">
                          {Guru.jabatan}
                        </td>
                        <td className="text-sm text-gray-900 font-medium px-2 py-2 text-center">
                          {Guru.status}
                        </td>
                        <td className="text-sm text-gray-900 font-medium px-2 py-2 text-center">
                          {Guru.no_hp}
                        </td>
                        <td className="text-sm text-gray-900 font-medium px-4 py-2 space-x-0">
                          <div className="flex justify-center">
                            <RiPencilFill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1" color="#1E6CB1" onClick={() => navTo(`/Siskoolbe/Admin/Edit_Guru/${Guru.id}`)}/>
                            <BsFillTrash3Fill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1 ml-2" color="#FF0000" onClick={() => deleteGuru(Guru.id)}/>
                          </div>
                        </td>
                      </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={'6'} className="px-4 py-2 text-center">Data Kosong</td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <>

        </>
      )}
    </>
  );
}
export default Adminguru;
