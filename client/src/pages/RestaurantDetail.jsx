import {Breadcrumb} from "../components/Breadcrumb";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getRestaurant} from "../api";

export function RestaurantDetailPage() {
    const [restaurant, setRestaurant] = useState(null);

    const params = useParams();

    useEffect(() => {
        getRestaurant(params.restaurantId).then((data) => {
            setRestaurant(data);
        });
    }, [params.restaurantId]);

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
        </>
    );
}
