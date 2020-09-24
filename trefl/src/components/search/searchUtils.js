import axios from 'axios'



const resources = {};

const search = () => {
    let cancel;

    return async query => {
        if(cancel){
            //Cancel the previos request before making a new request
            cancel.cancel();
        }

        //create new cancel token
        cancel = axios.CancelToken.source();
        try{
            if(resources[query]){
                //return results if it exists
                return resources[query];
            }
            const res = await axios (query,{cancelToken: cancel.token});

            const result = res.data.data;
            resources[query] = result;

            return result;
        }catch(error){
            if (axios.isCancel(error)) {
                // Handle if request was cancelled
                console.log('Request canceled', error.message);
              } else {
                // Handle usual errors
                console.log('Something went wrong: ', error.message);
              }

        }
    };
};

export default search();