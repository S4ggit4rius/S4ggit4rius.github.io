import React from "react";

import { RowContainer } from "./db-row.styles";

const Row = ({ id, name, surname, email }) => (
  <RowContainer>
    <p>{id}</p>
    <p>{name}</p>
    <p>{surname}</p>
    <p>{email}</p>
  </RowContainer>
);

export default Row;