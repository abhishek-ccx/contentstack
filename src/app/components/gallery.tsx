/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
// import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState();

  const fetchData = async () => {
    try {
      const headers = {
        access_token: "cs05e804552bae022c41b82384",
        api_key: "bltb1409d91c957ead3",
        branch: "main",
      };

      const response = await axios.get(
        "https://cdn.contentstack.io/v3/content_types/gallery/entries/blte24455c43325195c?environment=development",
        {
          headers: headers,
        }
      );

      // Handle the response data as needed
      console.log("Gallery DATA: ", response.data.entry);
      setGalleryData(response.data.entry);
      console.log(galleryData);
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {console.log("dataa", galleryData)}
      <div className="flex font-bold text-4xl justify-center">
        {galleryData?.text.heading}
      </div>
      <div className="flex text-lg justify-center my-5">
        {galleryData?.text.description}
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col">
          <img
            className="mt-24 bg-gray-100"
            src={galleryData?.images[0].image1.url}
            height="150px"
            width="250px"
          />
          <span className="relative -top-44 left-1 font-bold">
            {galleryData?.images[0].description_of_image1}
          </span>
          <div className="flex flex-col">
            <button className="border border-black p-1 w-52 mb-2">
              {galleryData?.button.button_value[0]}
            </button>
            <button className="border border-black p-1 w-52 mb-2">
              {galleryData?.button.button_value[1]}
            </button>
            <button className="border border-black p-1 w-52">
              {galleryData?.button.button_value[2]}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src={galleryData?.images[1].image1.url}
            height="150px"
            width="250px"
          />
          <span className="relative -top-48 left-1 font-bold">
            {galleryData?.images[1].description_of_image1}
          </span>

          <img
            src={galleryData?.images[2].image1.url}
            height="150px"
            width="250px"
          />
          <span className="relative -top-48 left-1 font-bold">
            {galleryData?.images[2].description_of_image1}
          </span>
        </div>
      </div>
      <div className="flex font-bold text-4xl justify-center">{galleryData?.colors.heading}</div>
      <div className="flex text-lg justify-center">{galleryData?.colors.description }</div>
    </>
  );
};

export default Gallery;

{
  /* <div className="flex flex-row"> 
    {galleryData?.images.map((image: any) => {
        console.log("image", image?.image1?.url);
        return (
          <img src={image?.image1?.url} height="485px" width="633px"></img>
        );
      })}
    </div> */
}
