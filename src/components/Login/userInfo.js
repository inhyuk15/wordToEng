const SET_ID = 'userInfo/GET_ID';
const SET_NAME = 'userInfo/GET_NAME';

export const setId = id => ({type : SET_ID, id});
export const setName = name => ({type : SET_NAME, name});


const initialState = {
    name : "defaultName",
    id : "defaultId",
};

const userInfo = (state = initialState, action)=>{
    const {userInfo} = state;

    switch(action.type){
        case SET_ID :
            return {
                ...state,
                id: action.id
            };
        case SET_NAME:
            return {
                ...state,
                name: action.name
            };
        default :
            return state;
    }
}

export default userInfo;
