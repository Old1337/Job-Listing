import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Job from "./Job";

import data from "../data/data.json";

const JobsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  gap: 2.5rem;

  @media (min-width: 1200px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

const FilterBar = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  top: -1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(180, 31%, 95%);
  border-radius: 0.5rem;
  width: fit-content;
`;

const Filter = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: bold;
  padding: 0.3rem;
  display: block;
`;

const RemoveFilter = styled.button`
  display: block;
  border: none;
  color: white;
  padding: 0;
  background-color: hsl(180, 29%, 50%);
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

const RemoveImage = styled.img`
  display: block;
`;

const ClearBtn = styled.button`
  display: block;
  border: none;
  padding: 0;
  cursor: pointer;
  color: hsl(180, 8%, 52%);
  background: no-repeat;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    color: hsl(180, 29%, 50%);
    border-bottom: 1px solid hsl(180, 29%, 50%);
  }
`;
export default function Jobs() {
  const [filterList, setFilterList] = useState([]);

  const addFilter = (filter) => {
    if (filterList.includes(filter)) {
      return;
    }
    setFilterList([...filterList, filter]);
  };

  const removeFilter = (filter) => {
    const newList = filterList.filter((skill) => skill !== filter);

    setFilterList(newList);
  };

  const clearList = () => {
    setFilterList([]);
  };
  return (
    <JobsContainer>
      <AnimatePresence>
        {filterList.length > 0 && (
          <FilterBar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FiltersContainer>
              {filterList.map((filter) => {
                return (
                  <FilterContainer key={filter}>
                    <Filter>{filter}</Filter>
                    <RemoveFilter
                      onClick={() => removeFilter(filter)}
                      aria-label="click to delete a filter"
                    >
                      <RemoveImage img src="images/icon-remove.svg" alt="" />
                    </RemoveFilter>
                  </FilterContainer>
                );
              })}
            </FiltersContainer>
            <ClearBtn onClick={clearList}>Clear</ClearBtn>
          </FilterBar>
        )}
      </AnimatePresence>

      {data.map((item) => {
        return (
          <Job
            key={item.id}
            info={item}
            addFilter={addFilter}
            filterList={filterList}
          />
        );
      })}
    </JobsContainer>
  );
}
