import jwt from "express-jwt";
import jwks from "jwks-rsa";

export const checkJwt = jwt.expressjwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: `${process.env.AUTH0_AUDIENCE}`,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

export async function getUser(token) {
    const auth0Request = await fetch(
        `https://${process.env.AUTH0_DOMAIN}/userinfo`,
        {
            headers: {
                Authorization: token,
            },
        }
    );

    return auth0Request.json();
}
