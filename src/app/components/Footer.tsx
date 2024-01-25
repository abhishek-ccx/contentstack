"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  // let DATA

  const [footerData, setFooterData] = useState();

  const fetchData = async () => {
    try {
      const headers = {
        access_token: "cs05e804552bae022c41b82384",
        api_key: "bltb1409d91c957ead3",
        branch: "main",
      };

      const response = await axios.get(
        `https://cdn.contentstack.io/v3/content_types/footer/entries/bltab57a3c7dd1014a7?environment=development`,
        {
          headers: headers,
        }
      );

      // Handle the response data as needed
      const data = response?.data?.entry;

      setFooterData(data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="bg-[#42454A]"
    >
      <div className="flex justify-between">
        <div className="">
          <img
            src={footerData?.scooter_image.url}
            width="729px"
            height="100px"
            // className="absolute bottom-0"
          />
        </div>
        <div className="p-9 ">
          <div
            className="flex font-sans text-xl font-bold	"
            style={{
              color: "#FBFBFB",
              "line-height": "normal",
            }}
          >
            {/* {console.log(footerData.heading1)} */}
            {footerData?.heading1.map((item: any, key: any) => {
              return (
                <div id={key} className="p-9">
                  <h2>{item.heading1}</h2>
                  {item.content.split("\n").map((cont: any) => {
                    return (
                      <div
                        className="text-base font-normal	"
                        style={{
                          color: "#FBFBFB",
                          "line-height": "54px",
                        }}
                      >
                        {cont}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="relative">
            <img
              className="absolute right-0"
              src={footerData?.icons.icon1[0].url}
              width="128px"
              height="32px"
            />
          </div>
        </div>
      </div>
      <div
        className="text-center text-base font-normal	"
        style={{
          color: "#FBFBFB",
          "line-height": "54px",
        }}
      >
        {footerData?.copyright_text}
      </div>
    </div>
  );
};

export default Footer;
