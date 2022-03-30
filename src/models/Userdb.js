// FIZ CTRL C DO SERIES, NAO EDITEI AINDA

const Sequelize = require("sequelize");
const connection = require("../database/db");

const Series = connection.define('serie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);

module.exports = Userdb