import usePagination from "@mui/material/usePagination/usePagination";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const { id } = usePagination();
  return (
    <div>
      <div>hello world :{id}</div>
      <div>
        <Link to={"/"}></Link>
      </div>
    </div>
  );
}
