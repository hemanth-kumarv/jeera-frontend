const baseUrl = "http://exampleurl";

export const getData = (userId) => {
    return baseUrl + "/data/" + userId;
};
