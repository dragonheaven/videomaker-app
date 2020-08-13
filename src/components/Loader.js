import React from 'react';
// import styled from 'styled-components';

import { CircularProgress } from '@material-ui/core';

// const Root = styled.div`
//   height: calc(100vh - 100px);
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   min-height: 100%;
// `;

function Loader() {
  return (
    <>
      <CircularProgress m={2} color="secondary" className="mr3" />
    </>
  );
}

export default Loader;
