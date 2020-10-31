// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import './Pagination.css';

type Props = {
  currentPage?: number,
  totalPageNumber?: number,
};

const Pagination = ({
  currentPage = 1,
  totalPageNumber = 1,
}: Props): React.Node => {
  const befMark =
    currentPage === 1 ? (
      <span className="disabled">&laquo;</span>
    ) : (
      <Link to={`/${currentPage - 1}`}>&laquo;</Link>
    );
  const nextMark =
    currentPage === totalPageNumber ? (
      <span className="disabled">&raquo;</span>
    ) : (
      <Link to={`/${currentPage + 1}`}>&raquo;</Link>
    );

  return (
    <div className="pagination">
      {befMark}
      {Array.from({ length: totalPageNumber })
        .map((_, ind) => ind + 1)
        .map((pageNum) => {
          return pageNum === currentPage ? (
            <span key={`pageNum-${pageNum}`} className="active">
              {pageNum}
            </span>
          ) : (
            <Link key={`pageNum-${pageNum}`} to={`/${pageNum}`}>
              {pageNum}
            </Link>
          );
        })}
      {nextMark}
    </div>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPageNumber: 1,
};

export default Pagination;
