import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
          {process.env.REACT_APP_GITHUB_TOKEN}
        </strong>
        .
      </p>
      <p className="text-lg text-black-400">Orkun Öci</p>
    </>
  );
}

export default About;
