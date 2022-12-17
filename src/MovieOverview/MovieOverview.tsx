import React, { FunctionComponent } from "react";

interface Props {
  title: any;
}

const MovieOverview: FunctionComponent<Props> = ({ title }) => {
  return <div>Movie {title}</div>;
};

export default MovieOverview;
