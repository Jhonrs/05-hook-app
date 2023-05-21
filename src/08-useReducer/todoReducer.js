export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {

        case '[TODO] Add Todo':
            console.log(  [ ...initialState, action.payload ] );
            return [ ...initialState, action.payload ];
       
        default:
            return initialState;
         
            break;
    
    }

}