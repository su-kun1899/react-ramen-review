import {useEffect, useState} from "react";
import {getRestaurants} from "../api";
import {Loading} from "../components/Loading";
import {Pagination} from "../components/Pagination";
import {Restaurant} from "../components/Restaurant";
import {Breadcrumb} from "../components/Breadcrumb";

export function RestaurantListPage() {
    const [restaurants, setRestaurants] = useState(null);
    const query = new URLSearchParams(location.search);
    const perPage = 5;
    const page = +query.get("page") || 1

    useEffect(() => {
        getRestaurants({
            limit: perPage,
            offset: (page - 1) * perPage,
        }).then((data) => {
            setRestaurants(data);
        });
    }, [page]);

    return (
        <>
            <div className="box">
                <Breadcrumb links={[
                    {href: "/", content: "Top"},
                    {href: "/restaurants", content: "ラーメン店一覧", active: true},
                ]}/>
            </div>
            {restaurants == null ? (
                <Loading/>
            ) : (
                <>
                    <div className="block">
                        {restaurants.rows.map((restaurant) => {
                            return <Restaurant key={restaurant.id} restaurant={restaurant}/>;
                        })}
                    </div>
                    <div className="block">
                        <Pagination path="/restaurants" page={page} perPage={perPage} count={restaurants?.count}/>
                    </div>
                </>
            )}
        </>
    );
}
