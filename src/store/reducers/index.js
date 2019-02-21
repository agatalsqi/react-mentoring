import { CombineReducers } from 'redux';
import { routerReducer } from 'connected-react-router';

export default combineReducers({
    routing: routeReducer
});