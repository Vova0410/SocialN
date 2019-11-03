/**
 * Created by Dell on 03.11.2019.
 */
import {setAuthUsersData} from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

export const appReducer = ( state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return ({
                    ...state,
                    initialized: true
            })
    }
    return state
};

export const SetInitializedSucces = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUsersData());

    Promise.all([promise]).then(() => {
        dispatch(SetInitializedSucces())
    })
};


