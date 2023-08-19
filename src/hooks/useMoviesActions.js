import { fetchAsyncMovies, fetchAsyncShows, getAllMovies,fetchAsyncMovieOrShowDetail,getSelectedMovieOrShow,removeSelectedMovieOrShow} from "../features/movies/moveSlice";
import { useAppDispatch,useAppSelector } from "./store";


export const useMovieActions =()=>{
    
    const dispatch = useAppDispatch();
    const fetchMovies = () =>{
        dispatch(fetchAsyncMovies());
    } 
    const fetchShows = () =>{
        dispatch(fetchAsyncShows());
    }

    const fetchMovieDetail = (id)=> {
        dispatch(fetchAsyncMovieOrShowDetail(id))
    }
    const getSelectedMovieDetail = ()=>{
        dispatch(getSelectedMovieOrShow())
    }
    
    const removeMovie =()=>{
        dispatch(removeSelectedMovieOrShow())
    } 

    
    return {fetchMovies,fetchShows,fetchMovieDetail,getSelectedMovieDetail,removeMovie}


}
