import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {
  return (
    <div>
      <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>
    </div>
  );
}
