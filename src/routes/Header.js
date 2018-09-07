import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.navigation = this.props.navigation
	}

	render(){
		const HeaderContainer = styled.div`
				width:100%;
			    padding-top:5em;
			    padding-bottom:5em;
				display: inline-flex;
				justify-content: space-between;
				background-color: black;
			`;
		const Titles = styled.div`
			    width:15em;
			    font-size:25pt;
			    font-family: Raleway-Regular;
			    color:white;
			    letter-spacing: .1em
			   	text-align:right;
			 `;
		const JobTitle = styled.div`
			font-size:20pt;
		`;
		const Navigation = styled.div`
		    width:35%;
		    padding-right:10%;
		    display: inline-flex;
		    justify-content: space-between;
		    font-size:20pt;
		    font-family: Raleway-Regular;
		    color:white;
		    letter-spacing: .1em;
		 `;
		 const StyledLink = styled(Link)`
		 		text-decoration: none;
				color:white;

		 `;
		return(
			<HeaderContainer>
				<Titles>
					<div>JAMES MULLER</div>
 					<JobTitle>DEVELOPER</JobTitle>
				</Titles>
				<Navigation>
					<StyledLink to='/'>Main</StyledLink>
					<StyledLink to='/resume'>Resumé</StyledLink>
					<StyledLink to='/projects'>Projects</StyledLink>
					<StyledLink to='/contact'>Contact</StyledLink>
				</Navigation>
			</HeaderContainer>
			)
	}
}
