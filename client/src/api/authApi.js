import api from "./axios";

export const registerUser = (userData) => {
    return api.post("/users/register", userData);
};

export const loginUser = (userData) => {
    return api.post("/users/login", userData);
};