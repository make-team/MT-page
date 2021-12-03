import { combineReducers } from "redux";
import recruiment from "./recruiment";

const rootReducer = combineReducers({
  recruiment,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
