// export const INPUT_FIELD = 'INPUT_FIELD';
// export const TEXT_FIELD = 'TEXT_FIELD';
// export const MESSAGE_FIELD = 'MESSAGE_FIELD
import axios from 'axios'; 


export const inputField = (number) => { 
    return {
        type: 'INPUT_FIELD',
        payload : number
}
}

export const textField = (textdata) => {
    return {
        type: 'TEXT_FIELD',
        payload : textdata
    }
}    
export const  messageField = ( ) => {
    
        return {
            type: 'MESSAGE_FIELD',
        
} 
}
export const fetchPosts = () =>{
    return function(dispatch){
          axios.get("DB.json")
          .then((response)=>{
            const posts = response.data
            dispatch(textField(posts))
          })
          .catch(error=>console.log(error))
    
}}