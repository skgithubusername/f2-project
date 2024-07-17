import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./AboutPage.css";

function Contact() {
  return (
    <div
      className="about-page-container"
      style={{
        lodding:'lazy',
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensures footer stays at the bottom
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/7b7e/1a5d/237ac851431326cd1fdcc120e75a55d5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FlayE3cmF28MyX3qRWtHcTpaPkgzfe~YOEpx9Y387z~K4dtMcJeRRyLVhuUddttSk-JluzRJNnnbDrkK3UE9N2iFVun-8eZeiJaeeYBGUxNJ694AtCbvdigKsFsHC8intGNoTFt6LW3AiyFp4wMED5envub~v~dvPAO~kFikhhfMVqAMpjB6S1efyoZ1eiNopWnN1cmzuXP43~LtVRt6YQGVCZCOSM4TEk~POg34zOB-tE08tcBbYJMZlMGkLnl0~YcCfbST8OlFSTpcrqs0mGfoSMkz0uYYEuaHGw~MhrcaY5dWJ25u1hTZbCGsnJPCWzQtjMZLCpD4aaJORKhChA__)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(2, 23, 75, 0.50)", // 50% opacity
          zIndex: 1,
        }}
      />
      <Navbar />
      <div style={{ position: "relative", zIndex: 2, paddingTop: "4rem", flex: 1 }}>
        <div className="flex flex-col m-4 md:m-10 lg:m-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-gray-300 font-semibold lg:text-3xl text-2xl mb-6">
              GET CONNECTED
            </h2>

            <div className="bg-white flex flex-col items-center justify-center rounded-lg w-full max-w-xl lg:max-w-2xl p-4">
              <input
                type="text"
                placeholder="Name"
                className="text-gray-500 focus:outline-none mt-4 p-2 rounded-lg w-full bg-gray-200 pl-8"
              />
              <input
                type="text"
                placeholder="Phone"
                className="text-gray-500 focus:outline-none mt-4 p-2 rounded-lg w-full bg-gray-200 pl-8"
              />
              <textarea
                placeholder="Message"
                className="focus:outline-none text-gray-500 mt-4 p-2 rounded-lg w-full bg-gray-200 pl-8"
              />
              <button className="text-white mt-6 p-2 rounded-lg px-12 text-center bg-blue-800">
                Send
              </button>
            </div>
            <div>
              <img
                className="relative w-40 md:w-56 lg:bottom-20 md:bottom-20 bottom-14 left-20 md:left-40 lg:left-60 sm:ml-6"
                src="https://s3-alpha-sig.figma.com/img/27bf/ca4a/981910c3b0ed168f346e6354eced39d3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ot~Dl9ENaSx~O4LC-4Wh90E5moTaB7m5Q2mv7ojBP3WfJLTOIXYUfUtRaAoGT7GaZ0HNYiu2etkdeJ81SUBx7iI6zdEdgX4JK2vUU6j2wDFIBH2gDTmMrx8o11TZ04aR2VHbwR~S7f77LXGYPcbD12Ha1rnIOvwN3qVghJuB182tqaYikBNQRi5F25FW~yC5oSEvLdKFYki4kjsdOv7MLYozNnvZJ8LfZGdpDGzTGqiUJ6yLus3heqWlwUqSwsZRA8-Rez4dqAlcBiz4wz5eE2PLS20ikLF-YjGck25aTsCdntu6BBfzjHZL~9AIIeWorY4E12MhiqHpo5MgyjMDuw__"
                alt="contact label"
                title="contact label"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row justify-between items-start mt-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-white font-semibold text-xl mb-6">
                Branch office:
              </h2>
              <p className="text-white">
                Plot-841, Road No.12 Krishnapur, Chutia, Ranchi, Jharkhand 834001
              </p>
              <p className="text-white">
                45, Lobito, Crescent Wuse 2 Abuja, FCT NIGERIA
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="text-white font-semibold text-xl mb-6">
                Email ID:
              </h2>
              <p className="text-white">ksrranchi@gmail.com</p>
              <p className="text-white">ksriil.info@gmail.com</p>
            </div>
          </div>
          {/*  */}
          <div className="mt-10">
            <h2 className="text-white font-semibold text-xl mb-6">
              Mobile No:
            </h2>
            <p className="text-white">+91-9709866876 / +91-8709553256</p>
            <p className="text-white mb-12">+2349130002999 / +2349132000009</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
