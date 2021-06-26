
import axios from 'axios';

const url='https://api.football-data.org/v2/competitions/2021/matches';
var token='ea7cb0230e764362aef72269a19ed9d5';

export const fetchData =async() => {
    try{

        const response =await axios.get(url,{headers:{'X-Auth-Token':token}});
        return response;

    }catch(error){
        
        console.log(error);
    }
}

 