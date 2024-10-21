const getPaginationButtons = (totalPages, currentPage, handlePageClick) => {
    const pages = [];
  
    // Show "..." and 3 middle buttons logic
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          className={currentPage === 1 ? 'active' : ''}
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
  
      if (currentPage > 3) {
        pages.push(<span key="left-ellipsis">...</span>);
      }
  
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
  
      if (currentPage < totalPages - 2) {
        pages.push(<span key="right-ellipsis">...</span>);
      }
  
      pages.push(
        <button
          key={totalPages}
          className={currentPage === totalPages ? 'active' : ''}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
  
    return pages;
  };


export default getPaginationButtons;