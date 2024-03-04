import {useSelector} from "react-redux";


export const usePostsStateSelector = () => {
    return useSelector((state) => state.data?.posts || []);
};