const ADD_FOLLOWER = 'followers/ADD_FOLLOWER'
const REMOVE_FOLLOWER = 'followers/REMOVE_FOLLOWER'

const addFollower = ({ follower_id }) => ({
    type: ADD_FOLLOWER,
    payload: follower_id
})

const removeFollower = () => ({
    type: REMOVE_FOLLOWER
})


export const follow = (follower_id, followed_id) => async (dispatch) => {
    const res = await fetch('/api/followers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            follower_id,
            followed_id
        })
    })

    if (res.ok) {
        const followData = await res.json()
        dispatch(addFollower(followData))
        return
    } else if (res.status < 500) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

const initialState = { followers: null }

export default function followerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOLLOWER:
            return {
                following: action.payload
            }
        case REMOVE_FOLLOWER:
            return {

            }
        default:
            return state;
    }
}