const axios =require('axios');


const httpClientPlugin={
    get: async (url)=>{
        const {data} =await axios.get(url);
        return await data;
    }
}

module.exports={
    http: httpClientPlugin,
};

