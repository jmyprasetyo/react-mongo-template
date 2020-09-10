import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    createMessage: function (messageInfo) {
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template/create-message", data: [messageInfo] });
    }
};