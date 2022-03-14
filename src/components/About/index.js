import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg"

const About = () => {
    // React.createElement("section", {}, [])
    // React.createElement("h1", {}, [])

    return (
        <section className={"my-5"}>
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover"/>
        </section>
    );
}

export default About;
