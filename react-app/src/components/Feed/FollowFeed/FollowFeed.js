import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as followActions from "../../../store/follower"

export default function FollowFeed() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const [forButton, setForButton] = useState(true)
    const [followingButton, setFollowingButton] = useState(false)

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
        <h1>hi!</h1>
    )
}