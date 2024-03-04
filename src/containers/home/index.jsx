import {Box, Button, CircularProgress, Typography} from '@mui/material';
import React, {useCallback, useState} from 'react';
import {useGetPostsQuery} from '../../services/api.reducer';
import {useDispatch} from 'react-redux';
import {debounce, truncate} from 'lodash';

const Home = () => {
    const {data: posts, isLoading, error, refetch} = useGetPostsQuery({
        pollingInterval: 3000,
        // skipPollingIfUnfocused: true,
    });
    const dispatch = useDispatch();
    const [showPosts, setShowPosts] = useState(false);
    const handleClick = useCallback(() => {
        setShowPosts((prev) => !prev);
    }, [showPosts]);

    if (isLoading) {
        return (
            <Box sx={{height: '100%', width: '100%', position: 'fixed', top: '0', left: '0', transform: 'translate(50%, 50%)'}}>
                <Typography>Loading...<CircularProgress /> </Typography>
            </Box>
        )
    };
    if (error) {
        debounce(() => {
            refetch();
        }, 1000)
        return (
            <Typography>Error fetching {error.message}</Typography>
        )
    }

    return (
        <Box>
            <Typography>Home</Typography>
            <Button
                variant="outlined"
                onClick={handleClick}
            >
                Show posts
            </Button>
            {
                showPosts && (
                    posts?.map((post) => (
                        <Box
                            key={post.id}
                            sx={{
                                border: '1px solid orange',
                                padding: '10px',
                                margin: '10px 0px',
                            }}
                        >
                            <Typography variant="h5">Title:{truncate(post?.title, {'length': 22})}</Typography>
                            <Typography variant="body1">Post: {post?.body}</Typography>
                        </Box>
                )
            ))}
            <Box>
                {}
            </Box>
        </Box>
    )
};

export default Home;