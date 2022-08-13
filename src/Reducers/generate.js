

export const initialState = {
    count: 0,
    message: `Wanna fetch some data from an API? You are just one click away😁`,
    posts : []
}

export const generate = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_FIELD':

            return {
                ...state,
                count: action.payload
            }
        case 'TEXT_FIELD':

            return {
                ...state,
                posts: action.payload
            }

        case 'MESSAGE_FIELD':
            return {
                ...state,
                message: `Data is Fetched Successfully😍`
            }
        default: return state
    }

}