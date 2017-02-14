import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../config';


import database from '../database/db';

import { SESSION_COOKIE } from '../app';

export default function AUTHRoutes(router) {
  router.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }));
  router.use(bodyParser.json());
  router.use(cookieParser());

  router.post('/register', (req, res) => {
    // check if user exists and password matches
    // create a token with user email encoded
    // encrypt the token
    // send the token back
    const { fname, lname, email, password } = req.body.register;

    const saltRounds = 11;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    database.query('insert into users(fname, lname, email, password) values($1, $2, $3, $4) returning userid'
      , [fname, lname, email, hash])
      .then(result => {
        const sessionUser = { email }
        const token = jwt.sign(sessionUser, config.get('APP_SECRET'));

        res.status('201').cookie(SESSION_COOKIE, token, {
          secure: config.get('HTTPS'),
          maxAge: 7200000,
          httpOnly: true
        }).json({ "userid": result.rows[0].userid })
      })
      .catch(error => {
        res.status('418').json({ "error": "invalid registration details" });
      })
  })

  router.post('/login', (req, res) => {
    // check if user exists and password matches
    // create a token with user email encoded
    // encrypt the token
    // send the token back

    console.log(req.body);

    const { email, password } = req.body.login;

    database.query('select userid, fname, lname, email, password from users where email=$1'
      , [email])
      .then(result => {
        if (bcrypt.compareSync(password, result.rows[0].password)) {

          const sessionUser = { email }
          const token = jwt.sign(sessionUser, config.get('APP_SECRET'));

          res.status('201').cookie(SESSION_COOKIE, token, {
            secure: config.get('HTTPS'),
            maxAge: 7200000,
            httpOnly: true
          }).json({
            "userid": result.rows[0].userid,
            "email": result.rows[0].email,
            "fname": result.rows[0].fname,
            "lname": result.rows[0].lname,
          })
        } else {
          res.status('418').json({ error: "Invalid Email/Password" });
        }
      })
      .catch(error => {
        res.status('418').json({ error });
      })
  })

  router.get('/logout', () => {
    res.clearCookie(SESSION_COOKIE).status(200).json({ success: 'You have successfully logged out' });
  })

  return router;

}