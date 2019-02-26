import React, { Component } from 'react';
import './App.css';

export default class App extends Component
{
	render()
	{
		return (
			<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
					<a className="nav-item nav-link" href="#">Features</a>
					<a className="nav-item nav-link" href="#">Pricing</a>
					<a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				</div>
				</div>

			</nav>
			<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8 text-center">
				<header>
					<img />
					<h4>Welcome to AC-Projects!</h4>
					<p>This website andsandsandsandçasnçasd</p>
				</header>
				<section>
					<h4>Welcome to AC-Projects!</h4>
					<p>This website andsandsandsandçasnçasd</p>
					<img />
				</section>
			</div>
			<div className="col-sm-2"></div>
			</div>
			</div>
		);
	}
}