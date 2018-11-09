"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "config_interactions",
      {
        version: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        cut_point_follow_max: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        cut_point_follow_min: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        cut_point_follow_ratio: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        blacklist: {
          type: Sequelize.TEXT("LONGTEXT2"),
          allowNull: false
        },
        blacklist_tags: {
          type: Sequelize.TEXT("LONGTEXT2"),
          allowNull: false
        },
        blacklist_usernames: {
          type: Sequelize.TEXT("LONGTEXT2"),
          allowNull: false
        },
        force_unfollow: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        like_from_discover: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        max_like_for_one_tag: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        like_per_day: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        follow_per_day: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        unfollow_per_day: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        comments_per_day: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        media_max_like: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        media_min_like: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        media_min_interest: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        follow_and_like_max: {
          type: Sequelize.INTEGER
        },
        max_target_followers: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_target_followers: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_media_follow: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_affinity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        end_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        account_id: {
          type: Sequelize.STRING,
          references: { model: "accounts", key: "account_id" }
        }
      },
      {
        timestamps: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("config_interactions");
  }
};
