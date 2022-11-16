import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from "../../../store/stories"
import StoryCard from './StoryCard'

export default function StoryFeed() {
    const dispatch = useDispatch()
    const stories = Object.values(useSelector(state => state.stories))
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(storyActions.fetchAllStories())
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])

    return (
        <>
            <div className='story-body'>
                <h2>Need to add CSS</h2>
                ------------------------
                <StoryCard stories={stories} />
            </div>
        </>
    )
}