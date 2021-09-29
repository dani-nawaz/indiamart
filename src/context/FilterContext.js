import React, { useEffect, useContext, useReducer } from 'react'
import { products } from '../components/ProductsPage/components/productData'
import { filter_reducer } from '../reducer/FilterReducer'
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../constants/FilterConstants'
const initialState = {
  filtered_products: [],
  grid_view: true,
  loading: true,
  sort: 'price-lowest',
}
const FilterContext = React.createContext()
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)
  console.log(state.loading)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    // dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [
    state.sort,
    // ,
    //  state.filters
  ])
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  // const updateFilter = (e) => {
  //   let name = e.target.name
  //   let value = e.targe.value
  //   if (name === 'category') {
  //     value = e.target.textContent
  //   }
  //   if (name === 'price') {
  //     value = Number(value)
  //   }
  //   if (name === 'shipping') {
  //     value = e.target.checked
  //   }
  //   dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  // }
  // const clearFilters = () => {
  //   dispatch({ type: CLEAR_FILTERS })
  // }
  const updateSort = (e) => {
    // just for demonstration;
    // const name = e.target.name
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        // clearFilters,
        // updateFilter,
        setListView,
        setGridView,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
