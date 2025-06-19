import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}

export interface MovieProps {
  id?: string
  title: string;
  posterImage: string;
  releaseYear: string;
}

export interface Mprops {
  movies: MovieProps[];
}
