import axios from "axios";
const ApiRouter = axios.create({baseURL: "https://petparadiseapi-production.up.railway.app/api/"})
export async function fetchPets(){
    const response = await ApiRouter.get("pets");
    return response.data;
}
export async function fetchAdoptions(token){
    const response = await ApiRouter.get("adoption",{
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
export async function fetchPetsId(id){
    const response = await ApiRouter.get(`pets/${id}`);
    return response.data;
}

export async function fetchUserRegister(data){
    const response = await ApiRouter.post("register", data);
    return response.data;
}
export async function fetchUserLogin(data){
    const response = await ApiRouter.post("login", data);
    return response.data;
}
export async function fetchAdoption(data,token){
    const response = await ApiRouter.post("adoption", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
export async function fetchFormAdoption(data,token){
    const response = await ApiRouter.post("pets", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}