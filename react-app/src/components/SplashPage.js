import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import StoryFeed from './Feed/StoryFeed/StoryFeed'

export default function SplashPage() {
    return (
        <>
            <>
                <NavBar />
                <div className="splash">
                    <div className="header">
                        <h2 className="title">Stay&nbsp;curious.</h2>
                        <p className="header__text">
                            Discover stories, thinking, and expertise from writers on any
                            topic.
                        </p>
                        <button className="start__reading" type="button">
                            <NavLink className="start-reading-text" to="/sign-up" exact={true} activeClassName="active">
                                Start reading
                            </NavLink>
                        </button>
                    </div>
                    <div className="medium__Ms">
                        <img className="screenshot" id="m1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <img className="screenshot" id="m10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m17" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m19" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m21" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m22" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m23" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m27" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m29" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m31" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m33" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m38" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m39" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m41" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m46" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m47" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m49" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m51" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m53" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m54" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m57" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m58" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m59" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m61" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m62" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m63" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m65" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m66" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m67" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m68" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m69" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m71" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m73" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m74" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m76" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m77" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m78" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m79" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m81" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m82" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m83" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m84" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m85" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m86" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m87" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m88" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m89" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m90" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m91" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m92" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m93" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m94" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m95" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m17" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m19" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m21" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m22" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m23" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m27" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m29" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m31" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m33" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m38" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m39" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m41" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m42" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m43" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m44" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m46" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m47" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m49" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m51" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m53" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m54" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m57" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m58" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m59" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m61" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m62" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m63" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m65" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m66" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m67" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m68" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m69" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m71" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <br />
                        <br />
                        <img className="screenshot" id="m73" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m74" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m76" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m77" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m78" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m79" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m81" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m82" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                        <img className="screenshot" id="m83" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background" />
                    </div>
                </div>
                <StoryFeed />
            </>
        </>
    )
}