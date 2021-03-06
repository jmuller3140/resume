import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

import Weather from '../components/Weather';
import Rumin from '../components/Rumin';
import Bluecross from '../components/Bluecross';
import Medcab from '../components/Medcab';

import './index.css';

const Wrapper = styled.div`
    .fade-enter {
      opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
  }

  .fade-exit {
      opacity: 1;
  }

  .fade-exit.fade-exit-active {
      opacity: 0.01;
      transition: opacity 500ms ease-in;
  }
  div.transition-group {
           position: relative;
      }
  section.route-section {
        position: absolute;
        width: 100%;
        top: 200px;
        left: 0;
      }
  @media (max-device-width: 1224px){
    section.route-section {
        top: 125px;
    }
  }
`;

const RouteList = ({location, match}) => {
              return (
          <Wrapper>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={{enter:1000, exit:1000}}>
              <section className="route-section">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/resume" component={Resume} />
                  <Route exact path="/projects" render={(props) => <Projects {...props} />} />
                  <Route path="/projects/weather" component={Weather} />
                  <Route path="/projects/rumin" component={Rumin} />
                  <Route path="/projects/bluecross" component={Bluecross} />
                  <Route path="/projects/medcab" component={Medcab} />
                  <Route path="/contact" component={Contact} />
                </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          </Wrapper>
                )
};

export default withRouter(RouteList)

