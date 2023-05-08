import React, { useState } from "react";
import MovieCard from "./MovieCard";

const FilmList = () => {
  const [film_list, setFilm_list] = useState([
    {
      title: "breaking Bad",
      desc: "nice Movie",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51lc95sU_rqLckRRy5UU4AwlUOQHsl3827g&usqp=CAU",
    },
    {
      title: "The Shawshank Redemption",
      desc: "nice Movie",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKscxa46H_Ic6CGducmJOw_YRQ2JYo-W-cQw&usqp=CAU",
    },
    {
      title: "The Godfather",
      desc: "nice Movie",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuOafgK2ekpdSf25NuinthPcS80_C0cCh8g&usqp=CAU",
    },
  ]);

  return (
    <div>
      <div>
        {film_list.map((movie) => (
          <MovieCard
            film_title={movie.title}
            film_desc={movie.desc}
            film_image={movie.image}
          />
        ))}
      </div>
    </div>
  );
};
export default FilmList;
