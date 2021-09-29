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

export const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      loading: false,
      all_product: [action.payload],
      filtered_products: [action.payload],
      filters: { ...state.filters, max_price: maxPrice },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  // if (action.type === FILTER_PRODUCTS) {
  //   const { all_products } = state
  //   const { text, category, company, price, shipping } = state.filters
  //   let tempProducts = [...all_products]
  //   if (text) {
  //     tempProducts = tempProducts.filter((product) =>
  //       product.name.toLowerCase().startsWith(text)
  //     )
  //   }
  //   if (category !== 'all') {
  //     tempProducts = tempProducts.filter(
  //       (product) => product.category === category
  //     )
  //   }
  //   if (company !== 'all') {
  //     tempProducts = tempProducts.filter(
  //       (product) => product.company === company
  //     )
  //   }
  //   // filter by price
  //   tempProducts = tempProducts.filter((product) => product.price <= price)
  //   if (shipping) {
  //     tempProducts = tempProducts.filter((product) => product.shippinh === true)
  //   }
  //   return { ...state, filtered_products: tempProducts }
  // }
  // if (action.type === UPDATE_FILTERS) {
  //   const { name, value } = action.payload
  //   return { ...state, filters: { ...state.filters, [name]: value } }
  // }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = []
    if (sort === 'price-lowest') {
      tempProducts = filtered_products.sort((a, b) => {
        // if (a.price < b.price) {
        //   return -1
        // }
        // if (a.price > b.price) {
        //   return 1
        // }
        // return 0
        return a.price - b.price
      })
    }
    if (sort === 'price-highest') {
      tempProducts = filtered_products.sort((a, b) => {
        // if (b.price < a.price) {
        //   return -1
        // }
        // if (b.price > a.price) {
        //   return 1
        // }
        // return 0
        return b.price - a.price
      })
    }
    if (sort === 'name-a') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }

    return { ...state, filtered_products: tempProducts }
  }
  // if (action.type === CLEAR_FILTERS) {
  //   return {
  //     ...state,
  //     filters: {
  //       ...state.filters,
  //       text: '',
  //       company: 'all',
  //       category: 'all',
  //       color: 'all',
  //       price: state.filters.max_price,
  //       shipping: false,
  //     },
  //   }
  // }

  throw new Error(`No Matching "${action.type}" - action type`)
}
