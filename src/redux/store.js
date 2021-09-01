import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk"
import authReducer from "./reducers/authReducer";
import {persistStore, persistReducer} from "redux-persist"


const persistConfig={
    key:"root",
    storage:AsyncStorage
}

const persistedReducer=persistReducer(persistConfig, authReducer)


const store=createStore(persistedReducer, applyMiddleware(thunk))


let persistor= persistStore(store)

export {store,persistor}