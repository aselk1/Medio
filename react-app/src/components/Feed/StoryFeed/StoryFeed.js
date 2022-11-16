import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from "../../../store/stories"
import * as sessionActions from "../../../store/session"
import StoryCard from './StoryCard'

export default function StoryFeed() {
    const dispatch = useDispatch()
    const stories = useSelector(state => state.stories)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        dispatch(storyActions.fetchAllStories())
            .then(() => dispatch())
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])

    return (
        <>
            <div className='story-body'>
                {stories.map(story => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>
        </>
    )
}