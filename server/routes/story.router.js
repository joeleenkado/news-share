//import mapStoreToProps from '../../redux/mapStoreToProps';

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log("in /api/story GET route");
  console.log("Is User logged in?", req.isAuthenticated());
  console.log("req.user:", req.user);

  let queryText = `SELECT * FROM "story"
                    WHERE "user_id" = $1;`;

  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
  let story = req.body;
  console.log(`Adding story`, story);
  // console.log('RS:', props.store)
  //console.log(this.state.user.id);

  let queryText = `INSERT INTO "story" ("user_id", "first_name", "last_name", "title", "state", "party", "twitter", "facebook", "instagram", "image_url", "additional_information", "headline", "body")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
  `;
  pool
    .query(queryText, [
      story.user_id,
      story.firstName,
      story.lastName,
      story.title,
      story.state,
      story.party,
      story.twitter,
      story.facebook,
      story.instagram,
      story.imageUrl,
      story.additionalInformation,
      story.headline,
      story.body,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new story`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

router.put("/", (req, res) => {
  console.log("in PUT");

  let story = req.body; // Book with updated content

  let id = req.params.id; // id of the book to update
  console.log("Updating", story.headline);
  console.log(story);

  //console.log(`Updating book ${id} with `, book);
  let queryText = `UPDATE "story"
SET "first_name" = $1, "last_name" = $2, "title" = $3, "state" = $4, "party" = $5, "twitter" = $6, "facebook" = $7, "instagram" = $8, "image_url" = $9, "additional_information" = $10, "headline" = $11, "body" = $12
WHERE "id" = $13;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool
    .query(queryText, [
      story.firstName,
      story.lastName,
      story.title,
      story.state,
      story.party,
      story.twitter,
      story.faceook,
      story.instagram,
      story.imageUrl,
      story.additionalInformation,
      story.headline,
      story.body,
      story.id,
    ])
    .then( () => {
      // Delete sends back an OK status,
      // client will then ask for all the data with a GET
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error from db:", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id; // id of the thing to delete
  console.log("Deleting story with id:", id);
  res.send("ok");
  //  console.log('in delete');
  let queryText = `DELETE FROM "story" WHERE id=$1
RETURNING "headline";`; //what is the 1 here
  //console.log('Delete route called with id of', id);
  // TODO - REPLACE BELOW WITH YOUR CODE
  //res.sendStatus(500);
  pool
    .query(queryText, [id])
    .then((result) => {
      console.log("Story Deleted:", result.rows[0]);

      // result.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);

      //res.sendStatus(200);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  // GET route code here
  const id = req.params.id;
  console.log("in get details router");
  console.log("req.params", req.params);
  console.log("in /api/story/:id GET route");
  console.log("Getting details for story with id:", id);
  console.log("Is User logged in?", req.isAuthenticated());
  console.log("req.user:", req.user);

  let queryText = `SELECT * FROM "story"
                        WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
