import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MovieProps, Mprops } from "@/interfaces";

const Movies: React.FC<Mprops> = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    const response = await fetch("/api/fetch-movies", {
      method: "POST",
      body: JSON.stringify({
        page,
        year,
        genre: genre === "All" ? "" : genre,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    if (!response.ok) {
      setLoading(false);
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    const results = data.movies;
    console.log(results);
    setMovies(results);
    setLoading(false);
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="min-h-screen bg-[#110f17] text-white px-4 md:px-10 lg:px-44">
      <div className="py-16">
        <div className="flex flex-col md:flex-row justify-between mb-4 items-center space-x-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="border-2 w-full md:w-96 border-[#E2D609] outline-none bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400"
          />

          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setYear(Number(event.target.value))
            }
            className="border-2 border-[#E2D609] outline-none bg-transparent px-4 md:px-8 py-2 mt-4 md:mt-0 rounded-full w-full md:w-auto"
          >
            <option value="">Select Year</option>
            {[2024, 2023, 2022, 2021, 2020, 2019].map((year: number) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        
      </div>
    </div>
  );
};

export default Movies;
