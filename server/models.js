import {Sequelize, DataTypes} from "sequelize";

const url = process.env.DATABASE_URL || "postgres://localhost:5432/review_app";

export const sequelize = new Sequelize(url);

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
    {underscored: true}
)
