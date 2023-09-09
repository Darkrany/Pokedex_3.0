import React from 'react'

function Pagination({ currentPage, setCurrentPage, pkmsPerPages, setPkmsPerPages }) {

    const pageNext = () => {
        currentPage++;
        setCurrentPage(currentPage);

    };

    const pagePrev = () => {
        if (currentPage > 1) {
          currentPage--;
          setCurrentPage(currentPage);
      }

    };

    const handleChange = (e) => {
      pkmsPerPages = e.target.value;
      setPkmsPerPages(pkmsPerPages);

    }

  return (

<div class="button-container">		
<button id="pagePrev" className="load-more" onClick={pagePrev} >Anterior</button>
<button id="pageNext" className="load-more" onClick={pageNext} >Siguiente</button>

<select id="cantidad" name="cantidad" className="load-more" onChange={handleChange} >
	<option value="20">20</option>	
	<option value="50">50</option>
	<option value="100">100</option>
  </select>
</div>

  )
}

export default Pagination