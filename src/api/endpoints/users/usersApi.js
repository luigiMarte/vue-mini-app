import axiosInstance from "../../axiosInstance";

export const fetchUsers = () => axiosInstance.get("/users");
export const fetchUserById = (id) => axiosInstance.get(`/users/${id}`);
export const createUser = (data) => axiosInstance.post("/users", data);
export const updateUser = (id, data) => axiosInstance.put(`/users/${id}`, data);
export const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);
