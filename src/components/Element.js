import React, { Component }from 'react';

class Element extends Component {
    constructor(prop) {
        super(prop);
        console.log(this.props);
    }

    isFavorite() {
        const isFavorite = this.props.state.is_favorite;

        if (isFavorite === true) {
          return (
                <button className="like like_active">
                    <i className="fas fa-heart"></i>
                </button>
            );
        }
        return (
            <button className="like">
                <i className="fas fa-heart"></i>
            </button>
        );
      }

    setFavorite = (id) => {
        
    }

    render() {
        return (
            <div className="col-xl-4">
                <a href="#" className="shop_item">
                    <div className="shop_item__title">
                        <h3>{this.props.state.title}</h3>
                        <div className="shop_item__title___right">
                            {this.isFavorite()}
                        </div>
                    </div>
                    <div className="shop_item__center">
                        <div className="shop_item__center___avatar">
                            <div className="shop_avatar">
                                <img src="img/shop_avatar_70x70x2.png" alt="img"></img>
                                <span>{this.props.state.rating}</span>
                            </div>
                        </div>
                        <div className="shop_item__center___text">
                            <p>{this.props.state.product_name}</p>
                        </div>
                    </div>
                    <div className="shop_item__bonus">
                        <h3>{this.props.state.discount}<small>%</small></h3>
                        <span>Бонусов</span>
                    </div>
                </a>
            </div>
        )
    }
}

export default Element;