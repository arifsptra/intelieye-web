import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

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
        "https://api.intelieye.my.id/predicts",
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
          <div className="max-w-[600px] mx-auto my-8 md:my-6 lg:my-2">
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
            <div className="max-w-[220px] mx-auto text-center">
              <p>Jawabannya adalah</p>
              {result === "Fakta" ? (
                <div className="bg-green-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : result === "Mitos" ? (
                <div className="bg-red-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : result === "Inputan Sementara Tidak Dikenal" ||
                result === "Bukan tentang mata" ? (
                <div className="bg-yellow-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              ) : (
                <div className="bg-sky-500 mt-2 py-2 rounded-md font-bold">
                  {result}
                </div>
              )}
            </div>
            <div className="max-w-[75vw] mx-auto text-center color mt-[50px]">
              <h4>Limitasi : Model telah ditrain dengan 50 mitos dan fakta</h4>
              <h4>
                Cek data yang telah ditrain dan seputarnya
                <br />
                dengan klik link dibawah ini
                <br />
                <a href="https://api.intelieye.my.id/trained" target="__blank">
                  api-intelieye/trained
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default App;
