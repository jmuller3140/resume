import React from 'react';

import { Footer, Header } from '../components';
import ProjectDisplay from '../components/ProjectDisplay';
const Projects = (props) => {

    return(
        <div>
            <ProjectDisplay {...props}/>
            <Footer />
        </div>)
}

export default Projects
