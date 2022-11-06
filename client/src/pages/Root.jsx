import {useEffect, useState} from "react";
import {getRestaurants} from "../api";
import {Loading} from "../../components/Loading";
import {Restaurant} from "../../components/Restaurant";

export function RootPage() {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurants({limit: 3}).then((data) => {
            setRestaurants(data);
        });
    }, []);

    return (
        <>
            <h2 className="title is-3">人気のラーメン店</h2>
            <div className="block">
                {restaurants == null ? (
                    <Loading/>
                ) : (
                    restaurants.rows.map((restaurant) => {
                        return <Restaurant key={restaurant.id} restaurant={restaurant}/>
                    })
                )}
            </div>
        </>
    );
}
