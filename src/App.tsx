import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface FormData {
  sentence: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    sentence: "",
  });
  const [result, setResult] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://api.intelieye.my.id/predicts",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form submitted successfully");
      setResult(response.data.result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full py-16 text-white px-4 bg-red">
        <div className="max-w-[1240px] mx-auto">
          <div className="lg:col-span-2 my-10 mx-auto text-center">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
              Menyingkap Tirai Mitos dan Fakta <br /> Tersembunyi seputar
              Kesehatan Mata
            </h1>
            <p className="text-lg">Apakah benar atau sekadar khayalan?</p>
          </div>
          <div className="max-w-[600px] mx-auto my-10 md:my-6 lg:my-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center"
            >
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="text"
                id="sentence"
                name="sentence"
                value={formData.sentence}
                onChange={handleChange}
                placeholder="Makan terlalu banyak bisa bikin minus?"
              />
              <button
                className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
                type="submit"
              >
                Cari Tahu
              </button>
            </form>
            <div className="max-w-[200px] mx-auto text-center">
              <p>Jawabannya Adalah</p>
              {result === "Fakta" ? (
                <div className="bg-green-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : result === "Mitos" ? (
                <div className="bg-red-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : result === null ? (
                <div className="bg-yellow-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : (
                <div className="bg-white mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
