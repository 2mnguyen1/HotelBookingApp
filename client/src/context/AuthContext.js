import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    _id: undefined,
    username: undefined,
    isAdmin: false,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                _id: state._id,
                username: state.username,
                isAdmin: state.isAdmin,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
