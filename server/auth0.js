import jwt from "express-jwt";
import jwks from "jwks-rsa";

export const checkJwt = jwt.expressjwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-fva6jkbt.auth0.com/.well-known/jwks.json',
    }),
    audience: 'http://localhost:4000/',
    issuer: 'https://dev-fva6jkbt.auth0.com/',
    algorithms: ['RS256']
});

export async function getUser(token) {
    const auth0Request = await fetch(
        "https://dev-fva6jkbt.auth0.com/userinfo",
        {
            headers: {
                Authorization: token,
            },
        }
    );

    return auth0Request.json();
}
