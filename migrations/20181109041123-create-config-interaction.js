"use strict";
module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface
      .createTable(
        "config_interactions",
        {
          config_interaction_id: {
            type: sequelize.INTEGER,
            unique: true,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          account_id: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          version: {
            type: sequelize.STRING
          },
          cut_point_follow_max: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          cut_point_follow_min: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          cut_point_follow_ratio: {
            type: sequelize.FLOAT,
            allowNull: false
          },
          blacklist: {
            type: sequelize.TEXT("LONGTEXT2"),
            allowNull: false
          },
          blacklist_tags: {
            type: sequelize.TEXT("LONGTEXT2"),
            allowNull: false
          },
          blacklist_usernames: {
            type: sequelize.TEXT("LONGTEXT2"),
            allowNull: false
          },
          force_unfollow: {
            type: sequelize.BOOLEAN,
            allowNull: false
          },
          like_from_discover: {
            type: sequelize.BOOLEAN,
            allowNull: false
          },
          max_like_for_one_tag: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          like_per_day: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          follow_per_day: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          unfollow_per_day: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          comments_per_day: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          media_max_like: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          media_min_like: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          media_min_interest: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          follow_and_like_max: {
            type: sequelize.INTEGER
          },
          max_target_followers: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          min_target_followers: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          min_media_follow: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          min_affinity: {
            type: sequelize.INTEGER,
            allowNull: false
          },
          start_date: {
            type: sequelize.DATE,
            allowNull: true
          },
          end_date: {
            type: sequelize.DATE,
            allowNull: true
          },
          createdAt: {
            type: sequelize.DATE
          },
          updatedAt: {
            type: sequelize.DATE
          }
        },
        {
          timestamps: false
        }
      )
      .then(() => {
        queryInterface.addConstraint("config_interactions", ["account_id"], {
          type: "foreign key",
          references: { table: "accounts", field: "account_id" }
        });
      });
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("config_interactions");
  }
};
