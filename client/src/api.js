async function request(path, options = {}) {
    const url = `${import.meta.env.VITE_REACT_APP_API_ORIGIN}${path}`;
    const response = await fetch(url, options);

    return response.json();
}

export async function getRestaurants(arg = {}) {
    const params = new URLSearchParams(arg);
    return request(`/restaurants?${params.toString()}`);
}

export async function getRestaurant(restaurantId) {
    return request(`/restaurants/${restaurantId}`);
}

export async function getRestaurantReviews(restaurantId, arg = {}) {
    const params = new URLSearchParams(arg);
    return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`);
}

export async function postRestaurantReview(restaurantId, record, getAccessToken) {
    try {
        const token = await getAccessToken({
            audience: import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE,
            scope: "read:current_user",
        });

        return request(`/restaurants/${restaurantId}/reviews`, {
            body: JSON.stringify(record),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    } catch (e) {
        console.log(e.message);
        throw e;
    }
}
