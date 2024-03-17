import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "@/redux/reducers/authReducer";
import {profileReducer} from "@/redux/reducers/profileReducer";
import {photoReducer} from "@/redux/reducers/photoReducer";
import {usersReducer} from "@/redux/reducers/usersReducer";
import {postsReducer} from "@/redux/reducers/postsReducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    photo: photoReducer,
    users: usersReducer,
    posts: postsReducer
})

let reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore