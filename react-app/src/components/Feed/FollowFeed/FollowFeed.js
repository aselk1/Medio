import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SideBar from '../../SideBar'
import * as followActions from "../../../store/follower"

export default function FollowFeed() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const [forButton, setForButton] = useState(false)
    const [followingButton, setFollowingButton] = useState(true)

    const forYou = () => {
        if (forButton) return
        setForButton(true)
        setFollowingButton(false)
    }

    const following = () => {
        if (followingButton) return
        setFollowingButton(true)
        setForButton(false)
    }

    useEffect(() => {
        dispatch(followActions.followingList(currentUser.id))
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])

    return (
        <div className='user-page-container'>
            <div className='user-page-holder'>
                <div className='user-page'>
                    <SideBar />
                    <main className='main-user-page'>
                        <div className='user-buttons'>
                            <div className='main-user-top' />
                            <div className='user-action-header'>
                                <div className='action-header-wrapper'>
                                    <div className='action-header'>
                                        <div className='action-bar-top' />
                                        <div className='action-bar-wrapper'>
                                            <div className='action-bar'>
                                                <div className='action-items'>
                                                    <div className={forButton ? 'for-you-action-clicked' : 'for-you-action'}>
                                                        <NavLink to={`/home`} className='for-you-link'>
                                                            <p className='for-you-link-container'>
                                                                <span className='for-you-holder'>
                                                                    <button className='for-you-button' onClick={forYou}>For You</button>
                                                                </span>
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                    <div className={followingButton ? 'following-action-clicked' : 'following-action'}>
                                                        <a className='following-link'>
                                                            <p className='following-container'>
                                                                <span className='following-holder'>
                                                                    <button className='following-button' onClick={following}>Following</button>
                                                                </span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className='right-sidebar'></div>
                </div>
            </div>
        </div>
    )
}