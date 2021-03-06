import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link to={`${movie.id}`}>
    <Overdrive id={`poster-${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path} `} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px rgba(0, 0, 0, .5);
`;
