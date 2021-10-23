const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");
const fetch = require("node-fetch");

router.post("/submit_promises", (req, res) => {
  const title = req.body.title;
  const year = req.body.year;
  if (title === "") {
    return res.render("response", {
      title: "Error",
      error: "Title is missing!",
    });
  }
  return new Promise((resolve, reject) => {
    request(
      {
        url: config.BASE_URL,
        qs: {
          t: title,
          ...(year && { y: year }),
          apikey: config.API_KEY,
        },
      },
      (err, response, body) => {
        const result = JSON.parse(body);
        if (response.statusCode == 200 && !result.Error) {
          resolve(result);
        } else {
          reject({ error: result.Error });
        }
      }
    );
  }).then(
    (result) => {
      //resolve
      return res.render("response", {
        title: result.Title,
        year: result.Year,
        poster: result.Poster,
        genre: result.Genre,
        runtime: result.Runtime,
        rated: result.Rated,
        plot: result.Plot,
        imdb: result.imdbRating,
        country: result.Country,
      });
    },
    //reject
    (result) => {
      return res.render("response", {
        title: "Error",
        error: result.error,
      });
    }
  );
});

router.post("/submit_asyncawait", async (req, res) => {
  const title = req.body.title;
  const year = req.body.year;
  if (title === "") {
    return res.render("response", {
      title: "Error",
      error: "Title is missing!",
    });
  }
  try {
    const result = await fetch(
      config.BASE_URL +
        "?" +
        new URLSearchParams({
          t: title,
          ...(year && { y: year }),
          apikey: config.API_KEY,
        })
    );
    const data = await result.json();
    if (data.Error) {
      throw new Error(data.Error);
    }
    return res.render("response", {
      title: data.Title,
      year: data.Year,
      poster: data.Poster,
      genre: data.Genre,
      runtime: data.Runtime,
      rated: data.Rated,
      plot: data.Plot,
      imdb: data.imdbRating,
      country: data.Country,
    });
  } catch (error) {
    return res.render("response", {
      title: "Error",
      error: error.message,
    });
  }
});

router.post("/submit_callback", (req, res) => {
  const title = req.body.title;
  const year = req.body.year;
  if (title === "") {
    return res.render("response", {
      title: "Error",
      error: "Title is missing!",
    });
  }
  request(
    {
      url: config.BASE_URL,
      qs: {
        t: title,
        ...(year && { y: year }),
        apikey: config.API_KEY,
      },
    },
    (err, response, body) => {
      const result = JSON.parse(body);
      if (response.statusCode == 200 && !result.Error) {
        return res.render("response", {
          title: result.Title,
          year: result.Year,
          poster: result.Poster,
          genre: result.Genre,
          runtime: result.Runtime,
          rated: result.Rated,
          plot: result.Plot,
          imdb: result.imdbRating,
          country: result.Country,
        });
      } else {
        return res.render("response", {
          title: "Error",
          error: result.Error,
        });
      }
    }
  );
});

module.exports = router;
