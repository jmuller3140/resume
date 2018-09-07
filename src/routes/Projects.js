import React from 'react';

import Footer from './Footer';
import ProjectDisplay from '../components/ProjectDisplay';
const Projects = (props) => {

    return(
        <div>
            <ProjectDisplay {...props}/>
            <Footer />
        </div>)
}

export default Projects
