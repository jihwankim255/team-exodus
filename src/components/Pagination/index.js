import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import Styled from './Pagination.styled'

function Pagination({
  nftsPerPage,
  totalNfts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = []
  const [currentPageRange, setCurrentPageRange] = useState(1)
  const pageSize = 10
  const totalPagesCount = Math.ceil(totalNfts / nftsPerPage)

  for (let i = 0; i < totalPagesCount; i++) {
    pageNumbers.push(i + 1)
  }
  const indexOfLastPageRange = currentPageRange * pageSize //      3 6 9 12
  const indexOfFirstPageRange = indexOfLastPageRange - pageSize // 0 3 6 9
  const slicedPageNumbers = pageNumbers.slice(
    indexOfFirstPageRange,
    indexOfLastPageRange
  )

  function handleNextButtonClick() {
    if (currentPageRange < Math.ceil(pageNumbers.length / pageSize)) {
      setCurrentPageRange(currentPageRange + 1)
      setCurrentPage((currentPageRange + 1) * pageSize - (pageSize - 1))
    }
  }

  function handlePrevButtonClick() {
    if (currentPageRange > 1) {
      setCurrentPageRange(currentPageRange - 1)
      setCurrentPage((currentPageRange - 1) * pageSize)
    }
  }
  const startIndex = (currentPageRange - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentPageNumbers = pageNumbers.slice(startIndex, endIndex)
  return (
    <Styled.Container>
      <Styled.PaginationContainer>
        <Styled.PaginationButton
          onClick={handlePrevButtonClick}
          disabled={currentPageRange === 1}
        >
          Prev
        </Styled.PaginationButton>
        {slicedPageNumbers.map((number) => (
          <Styled.PageNumbersContainer key={number} className="page-item">
            <Styled.PageNumberButton
              onClick={() => {
                paginate(number)
              }}
              className="page-link"
              active={currentPage === number}
            >
              {number}
            </Styled.PageNumberButton>
          </Styled.PageNumbersContainer>
        ))}
        <Styled.PaginationButton
          onClick={handleNextButtonClick}
          disabled={
            currentPageRange === Math.ceil(pageNumbers.length / pageSize)
          }
        >
          Next
        </Styled.PaginationButton>
      </Styled.PaginationContainer>
    </Styled.Container>
  )
}

export default Pagination
