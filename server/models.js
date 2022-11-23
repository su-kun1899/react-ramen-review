import {Sequelize, DataTypes} from "sequelize";

const url = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:15432/review_app";

// ローカルでは SSL 無効にする
const options = process.env.DATABASE_URL ? {
    "ssl": {
        require: true,
        rejectUnauthorized: false,
    },
} : {};

export const sequelize = new Sequelize(url, {
    dialect: "postgres",
    dialectOptions: options,
});

export const User = sequelize.define(
    "user",
    {
        sub: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {underscored: true},
);

export const Restaurant = sequelize.define(
    "restaurant",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        map: {
            type: DataTypes.TEXT,
        },
    },
    {underscored: true},
);

export const Review = sequelize.define(
    "review",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
            },
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Restaurant,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {underscored: true},
);

User.hasMany(Review);
Restaurant.hasMany(Review);
Review.belongsTo(Restaurant);
Review.belongsTo(User);
