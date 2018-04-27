import { combineReducers } from "redux";
import $config from '@/var/config'

const config = (state = $config) => state

const Reducers = combineReducers({
  config,
});

export default Reducers;
