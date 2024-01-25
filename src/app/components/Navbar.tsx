"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [navbarData, setNavbarData] = useState()

  const fetchData = async () => {
    try {
      const headers = {
        access_token: 'csb284e5bf460095e8477b9705',
        api_key: 'blt59ac588747cdfbdb',
        branch: 'mason_abhishek',
      };

      const response = await axios.get('https://cdn.contentstack.io/v3/content_types/navbar/entries/bltdad8d90fc16c7821?environment=development', {
        headers: headers,
      });

      // Handle the response data as needed
      console.log("NAVBAR DATA: ",response.data.entry);
      setNavbarData(response.data.entry)
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <nav className="flex flex-row p-4 items-center">
        <div className="basis-1/3">
          <div className="px-8">
            <img src={navbarData?.navbar_logo[0].url} width={55} height={55} alt='image'/>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-row">
            <div className="flex flex-row px-8 items-center">
              <Link href="/" className="uppercase tracking-wide text-sm pr-2 text-[#42454A]">{navbarData?.navbar_items.item_1}</Link>
              <svg width="10" height="13" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.526967 0.194787C0.786681 -0.0647285 1.20769 -0.0649578 1.46769 0.194274L4.05941 2.77838L6.65114 0.194274C6.91114 -0.0649581 7.33215 -0.0647285 7.59186 0.194787C7.85178 0.454502 7.85178 0.875584 7.59186 1.1353L4.72659 3.99838C4.35812 4.36657 3.76071 4.36657 3.39224 3.99838L0.526967 1.1353C0.267052 0.875583 0.267053 0.454502 0.526967 0.194787Z" fill="#42454A" />
              </svg>
            </div>

            <Link href="/" className="uppercase px-8 tracking-wide text-sm text-[#42454A]">{navbarData?.navbar_items.item_2}</Link>
            <Link href="/" className="uppercase px-8 tracking-wide text-sm text-[#42454A]">{navbarData?.navbar_items.item_3}</Link>
          </div>
        </div>
        <div className="basis-1/3 flex justify-end">
          <div className="px-8">
            <button className="uppercase px-6 py-3 tracking-wide text-sm rounded mx-1 text-[#42454A] shadow">Log in</button>
            <button className="uppercase px-6 py-3 tracking-wide text-sm bg-[#42454A] text-white rounded mx-1 shadow-md">sign up</button>
          </div>
        </div>
      </nav>
      <div className="border-b-2 border-[#EAE8F3] ..."></div>
    </>
  )
}

export default Navbar;