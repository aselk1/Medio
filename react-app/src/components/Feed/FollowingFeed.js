import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as followActions from "../../store/follower"

export default function Feed() {
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(followActions.followingList(currentUser.id))
            .then(() => setIsLoaded(true))
    }, [dispatch, isLoaded])


}