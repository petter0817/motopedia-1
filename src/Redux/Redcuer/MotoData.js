import {MOTODATA} from '../constant'

const MotoData = {}

export default function MotoDataReducer(preState = MotoData, action) {
    const { type, data } = action
    switch (type) {
        case MOTODATA:
            return data 
        default:
            return preState
    }
}