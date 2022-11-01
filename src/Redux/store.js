import { createStore, applyMiddleware, combineReducers } from 'redux'
import MotoDataReducer from './Redcuer/MotoData';
import BrandReducer from './Redcuer/Brand';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const allReducer = combineReducers(
    {
        MotoData:MotoDataReducer,
        Brand:BrandReducer
    }
)

const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist:["getdataReducer","adduserReducer"],//緩存資料
    blacklist:[MotoDataReducer]//不緩存資料
}

const persistedReducer = persistReducer(persistConfig, allReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
export default store