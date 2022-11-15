import { NavLink } from "react-router-dom"

export default function StoryCard({ story }) {
    return (
        <div className="story-card">
            <div className="story-author">
                <h1>{story}</h1>
            </div>
        </div>
    )
}