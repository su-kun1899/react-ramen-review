import {Breadcrumb} from "../components/Breadcrumb";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getRestaurant, getRestaurantReviews} from "../api";
import {Loading} from "../components/Loading";

function Restaurant({restaurant, reviews, page, perPage}) {
    return (
        <>
            <article className="box">
                <h3 className="title is-5">{restaurant.name}</h3>
                <div className="columns">
                    <div className="column is-6">
                        <figure className="image is-square">
                            <img src={restaurant.image || "/images/restaurants/noimage.png"} alt={restaurant.name}/>
                        </figure>
                    </div>
                    <div className="column is-6">
                        <figure className="image is-square">
                            <div className="has-ratio" dangerouslySetInnerHTML={{__html: restaurant.map}}></div>
                        </figure>
                    </div>
                </div>
            </article>
        </>
    );
}

export function RestaurantDetailPage() {
    const [restaurant, setRestaurant] = useState(null);
    const [reviews, setReviews] = useState(null);

    const params = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const perPage = 5;
    const page = +query.get("page") || 1

    useEffect(() => {
        getRestaurant(params.restaurantId).then((data) => {
            setRestaurant(data);
        });
    }, [params.restaurantId]);

    useEffect(() => {
        getRestaurantReviews(params.restaurantId, {
            limit: perPage,
            offset: (page - 1) * perPage,
        }).then((data) => {
            setReviews(data);
        })
    }, [params.restaurantId, page]);

    return (
        <>
            <div className="box">
                <Breadcrumb links={[
                    {href: "/", content: "Top"},
                    {href: "/restaurants", content: "ラーメン店一覧"},
                    {
                        href: `/restaurants/${params.restaurantId}`,
                        content: restaurant && `${restaurant.name} の情報`,
                        active: true,
                    },
                ]}/>
            </div>
            {restaurant == null || reviews == null ? (
                <Loading/>
            ) : (
                <Restaurant restaurant={restaurant} reviews={reviews} page={page} perPage={perPage}/>
            )}
        </>
    );
}
