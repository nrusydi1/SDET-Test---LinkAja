const { default: axios } = require("axios")

const baseUrl = 'https://reqres.in/api'

const getUsers = async (params) => {
    const response = await axios.get(`${baseUrl}/users`, {params});
    return response.data;
}

const registerUser = async (body) => {
    const response = await axios.post(`${baseUrl}/register`, body);
    return response.data;
}

module.exports = {
    getUsers,
    registerUser
}