import { api } from "../../api/apiConfig";

export const saveAgency = async (data) => {
    try {
        const response = await api.post("/agencies", data);

        return response;
    } catch (error) {
        throw error;
    }
};
