import React, { useEffect, useState } from "react";
import { Displayer } from "../components/Sidebar";
import Search from "../components/Search";
import Loader from "../components/Loader";

export default function Home() {
  const [backendData, setBackendData] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const url = `${backendUrl}/api/cars`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Handle different response structures
        let carsArray = [];
        if (Array.isArray(result)) {
          carsArray = result;
        } else if (Array.isArray(result.data)) {
          carsArray = result.data;
        } else if (result && typeof result === "object") {
          carsArray = [result]; // Wrap single object in array
        }

        setBackendData(carsArray);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="bg-[#86efac] h-full w-full text-black">
      <div className="flex gap-[20px] w-full">
        <div>
          <Displayer />
        </div>
        <div>
          <Search />
          <h2 className="text-[30px] text-center">Active car listings</h2>

          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <div className="lg:grid lg:grid-cols-2 gap-[30px]">
              {backendData.length > 0 ? (
                backendData.map((car, index) => (
                  <div key={index}>
                    <img
                      className="w-[400px] h-[400px] object-cover rounded-[10px]"
                      src={car.photo_urls[0]}
                      alt=""
                    />
                    <p>{car.make}</p>
                    <p>{car.model}</p>
                  </div>
                ))
              ) : (
                <p>No cars available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
