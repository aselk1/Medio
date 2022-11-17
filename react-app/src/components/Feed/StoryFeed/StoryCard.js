import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
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
                    <div className='story-feed-item' onClick={(e) => storyPage(story, e)}>
                        <div className='story-feed-item-holder'>
                            <div className='story-card-preview'>
                                <div className="story-author">
                                    <div className='story-author-feed-holder'>
                                        {/* add link on author name */}
                                        <div className='story-author-feed-container'>
                                            <div className='feed-inner-container'>
                                                <h4 className='feed-author-name'>{story.User.username}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink className='story-page-link' to={`/storyDetails/${story.id}`}>
                                    <h2>{story.title}</h2>
                                    <div className='story-body-preview'>
                                        <h3 className='story-feed-body'>{story.body}</h3>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}