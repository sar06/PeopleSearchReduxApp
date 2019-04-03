import {
    createStore,
} from 'redux';

export const updateSearchResults = (payload) => ({
    type: 'UPDATE_SEARCH_RESULTK',   
    payload                     // <-- action.type
});

export const serachReducer=(state =initialState, action)=>{
    console.log("reducer state",state,action.type);
   /* switch (action.type) {
        
      case 'UPDATE_SEARCH_RESULT':
            return Object.assign({},
                                 state,
                                 { searchResults:[...state.searchResults,action.payload], searchItems:state.searchItems}
                                )

        default:
            return state;
    }*/
    
    return state;
}



const initialState = { 
    searchItems: [{name:"Charlie",City:"Milwaukee",Industry:"Information Technology",Hobbies:"Gaming",Email:"charlie@gmail.com"},
                  {name:"Henry",City:"Madison",Industry:"HealthCare",Hobbies:"Gardening",Email:"henrye@gmail.com"},
                  {name:"Bob",City:"Chicago",Industry:"Finance",Hobbies:"Scamming",Email:"bob@gmail.com"},
                  {name:"Mary",City:"New York",Industry:"Education",Hobbies:"Music",Email:"mary@gmail.com"},
                  {name:"Terry",City:"Miami",Industry:"Food",Hobbies:"Cooking",Email:"terry@gmail.com"},
                  {name:"Jerry",City:"St Paul",Industry:"Insurance",Hobbies:"Sports",Email:"jerry@gmail.com"},
                  {name:"Molly",City:"Green Bay",Industry:"Education",Hobbies:"Music",Email:"molly@gmail.com"},
                  {name:"Luke",City:"Another Planet",Industry:"Government",Hobbies:"Fight",Email:"luke@gmail.com"}
                   ],
    searchResults :[]
};

export function configureStore(initialState = initialState) { // initialState = initialState | {}
    const store = createStore(serachReducer,initialState);
    return store;
};

export const store = configureStore();
