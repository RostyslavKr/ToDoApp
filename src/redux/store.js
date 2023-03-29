import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';
// import { statusFilter } from './constants';

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
