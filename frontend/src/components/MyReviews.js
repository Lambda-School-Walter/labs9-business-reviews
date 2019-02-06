import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { backendLink } from '../assets/config';
import Stars from './Stars'


const StyledReviews = styled.div`
	box-sizing: border-box;
	max-width: 1200px;
	height: auto;
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
	padding: 20px;
	@media (max-width: 900px) {
		width: 100%;
	}
  h1{
    width: 100%;
    text-align:center;
  }
	.review {
		width: 30%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		color: black;
		:hover {
			animation: shadow 0.2s;
			animation-fill-mode: forwards;
		}

		@media (max-width: 900px) {
			width: 45%;
			margin: 0 auto;
			margin-bottom: 20px;
		}
		@media (max-width: 500px) {
			width: 90%;
			margin: 0 auto;
			margin-bottom: 20px;
		}

		.review__img {
			width: 100%;
      max-height: 200px;
      img {
        width: 100%;
        height: auto;
      }
		}

		.review__title {
			font-size: 1.4rem;
			font-family: Roboto;
		}
		.review__business {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0rem;
		}

		.review__body {
			font-family: Roboto;
			font-style: italic;
			padding: 0 20px;
			margin-top: 0rem;
		}

		.review__ratingContainer {
			background-color: #eed974;
			padding: 0 10px;
			line-height: 0.8;
		}

		p {
			height: auto;
		}
		h4 {
			width: 100%;
			height: auto;
			text-align: center;
		}
	}

	@keyframes shadow {
		0% {
			box-shadow: none;
		}
		100% {
			box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
			transform: translateY(-2px);
		}
	}
`;

class MyReviews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			name: props.name,
			gravatar: props.gravatar,
			clickable: null
		};
  }
  handleUnclickable=()=>{
    alert("You can only edit your own reviews");
  }
	async componentDidMount() {
		const ids = this.props.id;
		Axios.get(`${backendLink}/api/user/${ids}/reviews`)
			.then((res) => this.setState({ reviews: res.data }))
			.catch((err) => console.log(err));

		const { data: { user: [ { id } ] } } = await Axios.get(`${backendLink}/api/user/me`, {
			withCredentials: 'include'
		});
		if (!id) return this.setState({ clickable: false });
		this.setState({ clickable: id === Number(ids) });
	}
	render() {
		return (
				<StyledReviews>
          <h1>Reviews</h1>
					{this.state.reviews ? (
						this.state.reviews.map(({ title, body, business_image, business_name, id, rating }) => {
							if (!this.state.clickable)
								return (
									<div onClick={this.handleUnclickable} key={id} className="review">
										<div className="review_img">
                      <img src={`${business_image}`} alt="business" />
                    </div>                    
										<h2 className="review__business">{business_name}</h2>
										<h4 className="review__title">{title}</h4>
										<p className="review__body">{body}</p>
										<Stars
                      rating={rating}
                      className="business__rating--stars"
                    />
									</div>
								);
							return (
								<Link to={`/user/review/${id}`} key={id} className="review">
									<div className="review_img">
                    <img className="review__img" src={`${business_image}`} alt="business"/>
                  </div> 
									<h2 className="review__business">{business_name}</h2>
									<h4 className="review__title">{title}</h4>
									<p className="review__body">{body}</p>
									<Stars
                      rating={rating}
                      className="business__rating--stars"
                    />
								</Link>
							);
						})
					) : null}
				</StyledReviews>
		);
	}
}

export default MyReviews;
