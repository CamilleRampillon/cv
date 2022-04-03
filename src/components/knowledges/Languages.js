import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 2.7},
            {id: 2, value: "CSS", xp: 1.8},
            {id: 3, value: "PHP", xp: 1.8}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 1},
            {id: 2, value: "Bootstrap", xp: 2},
            {id: 3, value: "Sass", xp: 1},
            {id: 4, value: "Symfony", xp: 2}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                languages= {languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages= {frameworks}
                className="frameworksDisplay"
                title="frameworks"
                />
            </div>
        );
    }
}

export default Languages;