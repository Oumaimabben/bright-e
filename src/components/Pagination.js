import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center font-montserrat mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-3 py-1  bg-greey border ${currentPage === page ? 'bg-blue-500 text-black' : 'bg-white text-blue-500'} rounded-none`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
