import { React } from "react";
import { Image } from "react-bootstrap";
import "./styles.css"
import twitterLogo from "../assets/twitter-blue-circle.svg"
import githubLogo from "../assets/ghlogo.png";
import liLogo from "../assets/LI-In-Bug.png";
import twitchLogo from "../assets/TwitchGlitchPurple.svg"


const Home = () => {
    return (
        <div className={"home"}>
            <div className={"bio"}>
                <p>
                    Hi, I'm Jack 👋
                </p>

                <p>
                    🎓 -  While I'm just finishing a degree in Computer Engineering degree at Northeastern University,
                    my passions are mostly rooted in data, ML, and education.
                </p>
                <p>
                    🤓 - In my free time, I love checking out new tech, repurposing old gadgets, and making music.
                </p>
                <p>
                    🤺 - On weekends, you can find me coaching beginners and experienced sabre fencers of all ages at <a href={"https://dynamo-fencing.com"}>Dynamo Fencing Center</a>
                </p>
                <p>
                    👨‍💻 - Previously, I worked at <a href={"https://www.edmit.me"}>Edmit</a>, an ed-tech startup that helped students and families
                    see college as an investment, rather than a cost. While there, I spent time as a software dev (working on the frontend
                    and backend), data analyst, customer success engineer, and content creator. It was awesome to wear many different hats, and learn on the fly.
                </p>
                <p>
                    👨‍🔧 - I've also worked at Apple as a retail specialist, and at Northeastern University in IT.
                </p>
                <p>✉️ - jackcduval(at)gmail(dot)com</p>
                <div className={"links"}>
                    <a href={"https://www.linkedin.com/in/jack-duval/"}>
                        <Image className={"logo"} src={liLogo} />
                    </a>
                    <br />
                    <a href={"https://twitter.com/_jackduval"}>
                        <Image className={"logo"} src={twitterLogo} />
                    </a>
                    <br />
                    <a href={"https://github.com/jack-duval"}>
                        <Image className={"logo"} src={githubLogo} />
                    </a>
                    <br />
                    <a href={"https://www.twitch.tv/stumbledorejd"}>
                        <Image className={"logo"} src={twitchLogo} />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Home;