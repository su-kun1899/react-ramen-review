import {Review} from "./Review";

export function Restaurant({restaurant}) {
    return (
        <article className="box">
            <div className="columns">
                <div className="column is-3">
                    <figure className="image is-square">
                        <img src={restaurant.image || "/images/restaurants/noimage.png"} alt={restaurant.name}/>
                    </figure>
                </div>
                <div className="column">
                    <h3 className="title is-5">{restaurant.name}</h3>
                </div>
                <div>
                    {restaurant.reviews.length === 0 ? (
                        <p>レビューがまだありません。</p>
                    ) : (
                        restaurant.reviews.map((review) => {
                            return <Review key={review.id} review={review}/>;
                        })
                    )}
                </div>
            </div>
        </article>
    )
}
