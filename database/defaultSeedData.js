const {
  Users,
  Accounts,
  ConfigInteractions,
  ConfigTargeting,
  ConfigRuntime
} = require("./models.js");

// ACCOUNTS
// Will be posted from Add Account Component, but here is a sample object of account table

// {
// 	"account_id": "12345",
// 	"platform": "instagram",
// 	"username": "testusername",
// 	"password": "testpassword",
// 	"active": "pending",
// 	"beta": false,
// 	"checkpoint_method": "email",
// 	"last_start": "",
// 	"initial_date": "",
// 	"initial_following_count": "",
// 	"initial_follower_count": "",
// 	"initial_media_count": "",
// 	"initial_affinity ": "",
// 	"initial_affinity_mean ": "",
// 	"initial_affinity_cardinality": "",
// 	"initial_affinity_min ": "",
// 	"initial_affinity_max ": "",
// }

// INTERACTIONS

var config_interactions_default = {
  cut_point_follow_max: 7500,
  cut_point_follow_min: 1000,
  cut_point_follow_ratio: 1.5,
  blacklist: {},
  blacklist_tags: [
    "second",
    "stuff",
    "project",
    "love",
    "life",
    "food",
    "blog",
    "free",
    "keren",
    "indo",
    "shop",
    "store",
    "sex",
    "toko",
    "jual",
    "online",
    "murah",
    "jam",
    "kaos",
    "case",
    "baju",
    "fashion",
    "hair",
    "corp",
    "tas",
    "butik",
    "grosir",
    "karpet",
    "sosis",
    "salon",
    "skin",
    "care",
    "cloth",
    "tech",
    "rental",
    "kamera",
    "beauty",
    "express",
    "kredit",
    "collection",
    "impor",
    "preloved",
    "follow",
    "follower",
    "gain",
    ".id",
    "_id",
    "bags",
    "repost",
    "pink",
    "transformation",
    "instagram",
    "facebook",
    "follow",
    "men",
    "sex",
    "babes",
    "like",
    "quote",
    "quotes",
    "dailyquote",
    "baby",
    "babies",
    "cat",
    "cats",
    "mom",
    "gains",
    "gainz",
    "workout",
    "gymrat",
    "lift",
    "business",
    "startup",
    "free",
    "giveaway",
    "me",
    "quoteoftheday",
    "promote",
    "rental",
    "goals",
    "networking",
    "motivated",
    "motivation",
    "learn",
    "blogger",
    "blog",
    "fblogger",
    "gym",
    "fittness",
    "sexy",
    "healthy",
    "work",
    "tag",
    "tags4likes",
    "tags4like",
    "f4f",
    "l4l",
    "wealth",
    "follow4follow"
  ],
  blacklist_usernames: [
    "second",
    "stuff",
    "project",
    "love",
    "life",
    "food",
    "blog",
    "free",
    "keren",
    "indo",
    "shop",
    "store",
    "sex",
    "toko",
    "jual",
    "online",
    "murah",
    "jam",
    "kaos",
    "case",
    "baju",
    "fashion",
    "hair",
    "corp",
    "tas",
    "butik",
    "grosir",
    "karpet",
    "sosis",
    "salon",
    "skin",
    "care",
    "cloth",
    "tech",
    "rental",
    "kamera",
    "beauty",
    "express",
    "kredit",
    "collection",
    "impor",
    "preloved",
    "follow",
    "follower",
    "gain",
    ".id",
    "_id",
    "bags"
  ],
  force_unfollow: false,
  like_from_discover: false,
  max_like_for_one_tag: 5,
  like_per_day: 1000,
  follow_per_day: 800,
  unfollow_per_day: 800,
  comments_per_day: 0,
  media_max_like: 50,
  media_min_like: 0,
  media_min_interest: 0,
  follow_and_like_max: 7,
  max_target_followers: 50000,
  min_target_followers: 60,
  min_media_follow: 5,
  min_affinity: 0,
  start_date: "",
  end_date: ""
};

// TARGETING

// var config_targeting_default = {
// 	"users": [],
// 	"locations": [],
// 	"gender": 0.5,
// 	"tags": ["photography", "travel"],
// 	"rolling_tags": false,
// 	"allow_personal_accounts": true,
// 	"allow_business_accounts": true,
// 	"allow_private_accounts": true,
// 	"affinity_targeting": [],
// 	"pool_targets": false,
// 	"pool_name": "*",
// 	"pool_to_discover_ratio": 2,
// 	"target_class": 0,
// }

// // RUNTIME

// var config_runtime_default = {
// 	"log_level": 10,
// 	"log_mod": 1,
// 	"proxy": true,
//   "proxy_zone": "static",
//   "roll_count": 1,
//   "min_follow_size": 50,
//   "min_inspect_size": 50,
//   "min_target_pool_size": 0,
//   "min_unfollow_size": 50,
//   "cycle_element_limit": 30,
//   "timeout": 48,
//   "timeout_cycle_all": 3600,
// 	"timeout_cycle_expired": 300,
// 	"timeout_cycle_pending": 900,
// 	"timeout_cycle_self": 60,
// 	"timeout_discover": 60,
// 	"timeout_inspect": 60,
// 	"timeout_print_summary": 5,
// 	"timeout_process_feed": 150,
// 	"timeout_update_preferences": 7200,
// 	"backoff_inspect": 1
// }

// var user = Users.build({
//   uuid: req.body.uuid,
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   email: req.body.email,
//   password: req.body.password
// });
// //   console.log(req.body);

// user
//   .save()
//   .then(data => {
//     console.log("user data successfully posted");
//     res.status(200).send("user data successfully posted");
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(401);
//   });

// Users, Accounts, ConfigInteractions, ConfigTargeting, ConfigRuntime;

// config_interactions_default
// var save_config_interactions_default = ConfigInteractions.build({
//   config_interactions_default
// });

// var saveData = function() {
//   save_config_interactions_default
//     .save()
//     .then(data => {
//       "data was successfully poted";
//     })
//     .catch(err => {
//       "there was an err", err;
//     });
// };

// saveData();

// module.exports = config_interactions_default;
