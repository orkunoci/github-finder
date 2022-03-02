import { createContext, useReducer } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const API_URL = "https://api.github.com";

  const fetchGit = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading();
    const response = await axios.get(`${API_URL}/search/users?${params}`);
    const { items } = response.data;

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const userGit = async (login) => {
    setLoading();
    const response = await axios.get(`${API_URL}/users/${login}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = response.data;

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const deleteState = () =>
    dispatch({
      type: "DELETE_USERS",
    });
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchGit,
        userGit,
        deleteState,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
