import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    const {place, onAticleClick, id, onCardHover} = props;
    const {photoUrl, isPremium, price, title, type, raiting} = place;
    this.place = place;
    this.onAticleClick = onAticleClick;
    this.onCardHover = onCardHover;
    this.id = id;
    this.photoUrl = photoUrl;
    this.isPremium = isPremium;
    this.price = price;
    this.title = title;
    this.type = type;
    this.raiting = raiting;
    this.state = {
    };
  }

  render() {
    const raitingpercents = (Math.round(this.raiting) * 20);
    switch (this.props.mode) {
      case `main`:
        return <article onMouseOver={() => {
          this.onCardHover(this.id);
        }} className="cities__place-card place-card">
          {this.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
          <div className="cities__image-wrapper pl1ace-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src={this.photoUrl} width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{this.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${raitingpercents}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#" id={this.id} onClick={() => {
                this.onAticleClick(this.id);
              }}>
                {this.title}</a>
            </h2>
            <p className="place-card__type">{this.type}</p>
          </div>
        </article>;
      case `detail`:
        return <article className="near-places__card place-card">
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src={this.photoUrl} width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{this.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${raitingpercents}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#" id={this.id} onClick={() => {
                this.onAticleClick(this.id);
              }}>
                {this.title}</a>
            </h2>
            <p className="place-card__type">Private room</p>
          </div>
        </article>;
      default:
        return null;
    }
  }
}

PlaceCard.propTypes = {
  mode: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onAticleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  place: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    raiting: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlaceCard;
