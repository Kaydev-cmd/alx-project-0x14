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

  return <div>Movies</div>;
};

export default Movies;
