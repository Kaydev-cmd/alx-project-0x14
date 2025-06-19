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

  return <div>Movies</div>;
};

export default Movies;
