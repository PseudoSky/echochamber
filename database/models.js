const Sequelize = require("sequelize");
const connection = require("./index.js");
const config_interactions_default = require("./defaultSeedData");

// USERS;
const Users = connection.define("users", {
  uuid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  logins: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

const Accounts = connection.define("accounts", {
  //account_id
  //active
  //beta
  //checkpoint_method
  //last_start
  //password
  //platform (string)
  //username
  // initial_affinity_cardinality (int: user)
  // initial_affinity_max (int: interaction)
  // initial_affinity_mean (float: avg["interaction"/"user"])
  // initial_affinity_min (int: interaction)
  // initial_affinity (int: sum["interactions"])
  // initial_date (timestamp)
  // initial_follower_count (int: count["user"])
  // initial_following_count (int: count["user"])
  // initial_media_count (int: count["media"])

  account_id: {
    type: Sequelize.STRING,
    unique: true
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  active: {
    type: Sequelize.STRING,
    defaultValue: "pending",
    allowNull: false
  },
  beta: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  checkpoint_method: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_start: {
    type: Sequelize.STRING
  },
  initial_date: {
    type: Sequelize.DATE
  },
  initial_following_count: {
    type: Sequelize.INTEGER
  },
  initial_follower_count: {
    type: Sequelize.INTEGER
  },
  initial_media_count: {
    type: Sequelize.INTEGER
  },
  initial_affinity: {
    type: Sequelize.INTEGER
  },
  initial_affinity_mean: {
    type: Sequelize.FLOAT
  },
  initial_affinity_cardinality: {
    type: Sequelize.INTEGER
  },
  initial_affinity_min: {
    type: Sequelize.INTEGER
  },
  initial_affinity_max: {
    type: Sequelize.INTEGER
  },
  config_interaction_version: {
    type: Sequelize.STRING,
    defaultValue: "default"
  },
  config_targeting_version: {
    type: Sequelize.STRING,
    defaultValue: "default"
  },
  config_runtime_version: {
    type: Sequelize.STRING,
    defaultValue: "default"
  }
});

const ConfigInteractions = connection.define(
  "config_interactions",
  {
    // cut_point_follow_max Do not allow the user's following to go above below this value
    // cut_point_follow_min Do not allow the user's following to drop below this value
    // cut_point_follow_ratio Do not allow the user's follow/following to drop below this value
    // blacklist Users to not interact with a lookup table mapping username -- id
    // blacklist_tags list of fragments to used to filter/ignore media
    // blacklist_usernames list of fragments to used to filter/ignore users
    // force_unfollow Always unfollow users after timeout expires
    // like_from_discover Allow likes to originate from the discover process rather than directly
    // max_like_for_one_tag Maximum likes to queue from the discovery feed for a given tag (requires like_from_discover to be enabled)
    // like_per_day Total number of like actions to perform in 24 hours (0-1000)
    // follow_per_day Total number of follow actions to perform in a dat (0-800)
    // unfollow_per_day Total number of unfollow actions to perform in a dat (0-800)
    // timeout Grace period allowed for a target before evaluated for removal (ex: min time until unfollow)
    // media_max_like Maximum number of likes a post can have for the bot to like it
    // media_min_like Minimum number of likes a post can have for the bot to like it
    // media_min_interest The minimum number of targeted tags a post must have in order to like it
    // follow_and_like_max Maximum posts to like after following
    // max_target_followers Parameter to filter user discovery by bounding the maximum number of users they follow
    // min_target_followers Parameter to filter user discovery by bounding the minimum number of users they follow
    // min_media_follow Minimum number of posts a user needs to be considered
    // min_affinity Minimum affinity a user must have to retain the user as a follower
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
    }
  },
  {
    timestamps: false
  }
);

const ConfigTargeting = connection.define("config_targeting", {
  // users A set of users that have followers of interest
  // locations list of locations to target
  // gender The target ratio of males to females in the audience 0.5 being half and half
  // tags list of tags to target
  // rolling_tags Update tag list from the tags in user's recent posts
  // allow_personal_accounts Allow/Disallow discovery on personal accounts
  // allow_business_accounts Allow/Disallow discovery on business accounts
  // allow_private_accounts Allow/Disallow discovery on private accounts
  // affinity_targeting Target users based on audience users with high affinity
  // pool_targets Pull targets from ranking graph
  // pool_name Pull targets from a specific group of users
  // pool_to_discover_ratio Targets enqueued per discover follow enqueued (pool_targets must be enabled)
  // target_class only pull targets from specified response class (pool_targets must be enabled)

  users: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  locations: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  gender: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  tags: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  rolling_tags: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  allow_personal_accounts: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  allow_business_accounts: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  allow_private_accounts: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  affinity_targeting: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  pool_targets: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  pool_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  pool_to_discover_ratio: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  target_class: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const ConfigRuntime = connection.define("config_runtime", {
  // log_level The persistent log write level from debug (0) to 1000 (failure)

  log_level: {
    type: Sequelize.INTEGER
  },
  log_mod: {
    type: Sequelize.INTEGER
  },

  // proxy Enable/Disable static IP proxy
  // proxy_zone Static ip resource identifier (proxy must be enabled)
  // roll_count Number of times a user has needed to roll/refresh their proxy address

  proxy: {
    type: Sequelize.BOOLEAN
  },
  proxy_zone: { type: Sequelize.STRING },
  roll_count: { type: Sequelize.INTEGER },

  // min_follow_size Queue constraint for the minimum size the follow queue should be
  // min_inspect_size Queue constraint for the minimum size the inspect queue should be
  // min_target_pool_size Target Pool constraint for the minimum number of targets available to the user
  // min_unfollow_size Queue constraint for the minimum size the unfollow queue should be
  // cycle_element_limit Number of elements to query per inspection cycle
  // QUEUE CONSTRAINTS

  min_follow_size: {
    type: Sequelize.INTEGER
  },
  min_inspect_size: {
    type: Sequelize.INTEGER
  },
  min_target_pool_size: {
    type: Sequelize.INTEGER
  },
  min_unfollow_size: {
    type: Sequelize.INTEGER
  },
  cycle_element_limit: {
    type: Sequelize.INTEGER
  },

  // timeout_cycle_all Time until the bot inspects the entire expired/pending/self queues (sampled)
  // timeout_cycle_expired Time until the expired queue is inspected (sampled)
  // timeout_cycle_pending Time until the pending queue is inspected (sampled)
  // timeout_cycle_self Time until the user's profile is inspected for updates
  // timeout_discover Time until the discover feed is scanned for new users
  // timeout_inspect Time until the unprocessed data is ranked
  // timeout_print_summary Time until the action results are logged
  // timeout_process_feed Time until the user's feed is inspected
  // timeout_update_preferences Time until the user's preferences are checked for version changes
  //TIMEOUTS
  timeout_cycle_all: {
    type: Sequelize.INTEGER
  },
  timeout_cycle_expired: {
    type: Sequelize.INTEGER
  },
  timeout_cycle_pending: {
    type: Sequelize.INTEGER
  },
  timeout_cycle_self: {
    type: Sequelize.INTEGER
  },
  timeout_discover: {
    type: Sequelize.INTEGER
  },
  timeout_inspect: {
    type: Sequelize.INTEGER
  },
  timeout_print_summary: {
    type: Sequelize.INTEGER
  },
  timeout_process_feed: {
    type: Sequelize.INTEGER
  },
  timeout_update_preferences: {
    type: Sequelize.INTEGER
  },
  timeout: {
    type: Sequelize.INTEGER
  },
  backoff_inspect: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

Users.belongsToMany(Accounts, { through: "uuid " });
Accounts.belongsTo(Users, { through: "uuid" });

Accounts.belongsToMany(ConfigInteractions, { through: "account_id" });
ConfigInteractions.belongsTo(Accounts, { through: "account_id" });

Accounts.belongsToMany(ConfigTargeting, { through: "account_id" });
ConfigTargeting.belongsTo(Accounts, { through: "account_id" });

Accounts.belongsToMany(ConfigRuntime, { through: "account_id" });
ConfigRuntime.belongsTo(Accounts, { primaryKey: "account_id" });

connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports = {
  Users,
  Accounts,
  ConfigInteractions,
  ConfigTargeting,
  ConfigRuntime
};
