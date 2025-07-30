import React, { useState, useEffect } from "react";
import "../css/home.css";

const Home = () => {
    const [typedText, setTypedText] = useState("");
    const greeting = "Hi! I'm Carl";
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(greeting.slice(0, i + 1));
            i++;
            if (i === greeting.length) clearInterval(interval);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-bg home-container">
            <div className="home-row">
                <div className="home-profile-img-wrapper large">
                    <img
                        src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/469547405_8864299730297389_865123246857106168_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENmLUmp6zx4aYnb8SM8fwme5KYnJ3BfF57kpicncF8XiUMkQSaBJ1bita3lT8HOq6t6O0j3AdxdOtxkK__u3lH&_nc_ohc=ay-evxhJetYQ7kNvwGC9DEd&_nc_oc=AdlAdnZFS-evJOZ1kTAzxLyIv-SC2SP2V0jD3CQbdtPIYiYUnJhAWvXfWGBaTTMxP-k&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=WyOIIZ0mTS9KXhkLCo-ZuQ&oh=00_AfSqKyZ_rUnqm_dsGQ7KCf0sj0c_Pmw-ftHmtPRlBx7RXA&oe=68817697"
                        alt="Carl"
                        className="home-profile-img large"
                    />
                </div>
                <div className="home-text-col">
                    <h1 className="home-greeting">
                        <span className="typewriter">{typedText}</span>
                         
                    </h1>
                    <h2 className="home-title">Welcome to My Portfolio</h2>
                    <p className="home-desc">
                        Explore my projects, skills, and experience. Thank you for visiting!
                    </p>
                    <button className="home-cta-btn" onClick={() => window.location.href = '/projects'}>
                        🚀 See My Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;