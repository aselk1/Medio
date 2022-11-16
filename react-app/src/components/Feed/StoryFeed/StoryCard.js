import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as storyDetailActions from '../../../store/storyDetails'

export default function StoryCard({ stories }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const storyPage = async (story, e) => {
        e.preventDefault()
        dispatch(storyDetailActions.fetchStoryDetails(story.id))
            .then(() => history.push(`/storyDetails/${story.id}`))
    }
    return (
        <>
            {stories.map(story => (
                <div className="story-card">
                    <div onClick={(e) => storyPage(story, e)}>
                        <div className="story-author">
                            Author: {story.User.username}
                        </div>
                        <div className='story-preview'>
                            <h2>Title: {story.title}</h2>
                            <h3>Body: {story.body}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}