import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as storyActions from "../../../store/stories"
import StoryCard from './StoryCard'
import './StoryFeed.css'

export default function StoryFeed() {
    const dispatch = useDispatch()
    const stories = Object.values(useSelector(state => state.stories))
    const [isLoaded, setIsLoaded] = useState(false)
    // console.log('stories', stories[0].User)
    let storiesCopy = []
    let trendingArr = []

    if (isLoaded) {
        for (let i = 0; i < 3; i++) {
            storiesCopy.push(stories[i])
            trendingArr.push({ 'body': stories[i].body, 'title': stories[i].title, 'id': stories[i].id, 'user_id': stories[i].user_id })
        }
    }

    useEffect(() => {
        dispatch(storyActions.fetchAllStories())
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])

    return (
        <div className='story-section'>
            <div className='trending'>
                <div className='trending-container'>
                    <div className='trending-inner-container'>
                        <div className='trending-holder'>
                            <div className='trending-title'>
                                <div>[icon]</div>
                                <div className='title-holder'>
                                    <p className='title-line'>Trending on Medium</p>
                                </div>
                            </div>
                            <div className='trending-stories-holder'>
                                <div className='trending-stories'>
                                    {trendingArr.map(story => (
                                        <div className='trending-story-container'>
                                            <div className='trending-story-holder'>
                                                <div className='trending-inner-story'>
                                                    <div className='trending-story'>
                                                        <span>01</span>
                                                    </div>
                                                    <div className='story-preview'>
                                                        <div className='details'>
                                                            <div className='story-author'>
                                                                <div className='author-name'>
                                                                    link goes here
                                                                    <h4>{story.body}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='details'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='story-body'>
                <StoryCard stories={stories} />
            </div>
        </div>
    )
}