import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as storyActions from "../../../store/stories"

export default function StoryFeed() {
    const dispatch = useDispatch()
    const storyObj = useSelector(state => state.stories)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        dispatch(storyActions.fetchAllStories())
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])


}