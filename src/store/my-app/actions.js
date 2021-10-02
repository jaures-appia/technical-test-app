import { api } from "src/boot/axios";

export function getUsers (context) {
    api.get("users")
        .then((response) => {
            console.log(response.data)
            context.commit("GET_USERS", response.data)
        })

    setInterval(() => { 
        api.get("users")
        .then((response) => {
            context.commit("GET_USERS", response.data)
        }) 
    }, 1000); 
}
