import { combineReducers } from '@reduxjs/toolkit'
import apparelsReducer from './apparels/apparelSlice'
import adsReducer from './ads/adSlice'
import carouselsReducer from './carousel/carouselSlice'
import usersReducer from './users/userSlice'
import likeSlice from './like/likeSlice'
import cartSlice from './cart/cartSlice'

const rootReducer = combineReducers({
    apparels: apparelsReducer,
    ads: adsReducer,
    carousels: carouselsReducer,
    users: usersReducer,
    likes: likeSlice,
    carts: cartSlice
})

export default rootReducer