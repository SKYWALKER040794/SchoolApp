import axios from "axios";

const finalService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/schools"
    };
    
finalService.get = () => {
    const config = {
        method         : "GET",
        url            : finalService.endpoint,
        crossdomain    : true,
        withCredentials: true,
        headers        : { "Content-Type": "application/json" }
    };
    return axios(config)
}

finalService.post = (payload) => {
    const config = {
        method         : "POST",
        url            : finalService.endpoint,
        data           : payload,
        crossdomain    : true,
        withCredentials: true,
        headers        : { "Content-Type": "application/json" }
    };
return axios(config)
}

finalService.delete = (id) => {
        const config = {
        method         : "DELETE",
        url            : `${finalService.endpoint}/${id}`,
        crossdomain    : true,
        withCredentials: true,
        headers        : { "Content-Type": "application/json" }
};

return axios(config)

}


finalService.put = (payload, Id) => {
    const config = {
        method         : "PUT",
        url            : `${finalService.endpoint}/${Id}`,
        data           : payload,
        crossdomain    : true,
        withCredentials: true,
        headers        : { "Content-Type": "application/json" }
        };
        return axios(config)
}


export {finalService};