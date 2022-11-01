import {BRAND} from '../constant'

const Brand = {}

export default function BrandReducer(preState = Brand, action) {
    const { type, data } = action
    switch (type) {
        case BRAND:
            return data 
        default:
            return preState
    }
}