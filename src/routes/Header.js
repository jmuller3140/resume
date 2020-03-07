import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
			    color:silver;
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
		    color:silver;
		    letter-spacing: .1em;
		 `;
// -----------------------------------------------------------------
// ------------------ Mobile CSS -----------------------------------
// -----------------------------------------------------------------
		const HeaderContainerMobile = styled.div`
				width:100%;
			    padding-top:2em;
				display: flex;
				flex-direction:column;
				justify-content: center;
				align-items:center;
				background-color: black;
			`;
		const TitlesMobile = styled.div`
			    width:100%;
			    font-size:17pt;
			    font-family: Raleway-Regular;
			    color:silver;
			    letter-spacing: .1em
			   	text-align:center;
			 `;
		const JobTitleMobile = styled.div`
			font-size:15pt;
		`;
		const NavigationMobile = styled.div`
		    width:20em;
		    display: inline-flex;
		    justify-content: center;
		    font-size:12pt;
		    font-family: Raleway-Regular;
		    color:silver;
		    letter-spacing: .1em;
		    padding-top:1em;
		    border-bottom: 1px solid silver;
		 `;
		 const StyledLink = styled(Link)`
		 		text-decoration: none;
				color:silver;
				padding:.6em;
				&:hover{
					color:white;
				}

		 `;
		return(
			<div>
				<MediaQuery query="(min-device-width: 1224px)">
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
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<HeaderContainerMobile>
						<TitlesMobile>
							<div>JAMES MULLER</div>
						</TitlesMobile>
						<NavigationMobile>
							<StyledLink to='/'>Main</StyledLink>
							<StyledLink to='/resume'>Resumé</StyledLink>
							<StyledLink to='/projects'>Projects</StyledLink>
							<StyledLink to='/projects'>Donations</StyledLink>
							<StyledLink to='/contact'>Contact</StyledLink>
						</NavigationMobile>
					</HeaderContainerMobile>
				</MediaQuery>
			</div>
			)
	}
}
