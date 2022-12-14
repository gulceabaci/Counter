import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  counterReducer, //aynı isimli bir değişken oluşturdu ona attı
});
export default reducers;