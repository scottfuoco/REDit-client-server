import cors from 'cors';
import bodyParser from 'body-parser'
import database from '../database/db';
import cookieParser from 'cookie-parser'
import { SESSION_COOKIE } from '../app';
import jwt from 'jsonwebtoken';

export default function APIRoutes(router) {
  router.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }));
  router.use(bodyParser.json());
  router.use(cookieParser());

  router.use((req, res, next) => {
    if (!req.cookies[SESSION_COOKIE]) {
      return res.status(403).json({ error: 'Not authorized' });
    } // check auth tokens;
    const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE]);

    next();
  })

  router.get('/posts/:lessonid', (req, res) => {
    database.query('SELECT * FROM posts WHERE lessonid = $1', [req.params.lessonid]).then(result => {
      console.log(result.rows);
      res.json(result.rows);
    }).catch(function (err) {
      console.log(err);
      res.status(500).json({ err });
    })
  });

  router.get('/weeks', (req, res) => {
    database.query(`SELECT weeks.weekid, weeks.title, json_agg(json_build_object('id', lessons.lessonid, 'lesson', lessons.title)) as lessons
                    from weeks
                    inner join lessons on lessons.weekid = weeks.weekid
                    group by
                      weeks.weekid
                     order by
                      weeks.title asc`).then(result => {
        console.log(result.rows);
        res.json(result.rows);
      }).catch(function (err) {
        console.log(err);
        res.status(500).json({ err });
      })
  });

  //   select
  //     weeks.week_id,
  //     weeks.title,
  //     json_agg(json_build_object('category_id', categories.category_id, 'category_title', categories.title)) as categories
  // from
  //     weeks
  //     inner join categories on categories.week_id = weeks.week_id
  // group by
  //     weeks.week_id
  // order by
  //     weeks.title asc;



  router.post('/posts', (req, res) => {
    const { title, link, votes, description, author, date, userid, lessonid } = req.body.post;
    database.query(`INSERT INTO posts(title, link, votes, description, date, userid, lessonid)
                    VALUES($1, $2, $3, $4, $5, $6, $7)`, [title, link, votes, description, date, userid, lessonid]).then(result => {
        console.log('successful addition');
        res.sendStatus('201');
      }).catch(err => {
        console.log(err)
        res.status(500).json({ err });
      });
  });

  router.post('/vote/:postid', (req, res) => {
    const { userid, postid } = req.body.vote;
    database.query(`INSERT INTO user_post_votes(userid, postid)
                    VALUES($1, $2)`, [userid, postid]).then(result => {
        console.log('successful vote');
        res.sendStatus('200');
      }).catch(err => {
        console.log(err);
        res.status('418').json({ "error": "You have already voted" });
      });
  });

  router.post('/unvote/:postid', (req, res) => {
    const { userid, postid } = req.body.vote;
    database.query(`DELETE FROM user_post_votes WHERE userid=$1 and postid=$2`, [userid, postid]).then(result => {
      console.log('successful unvote');
      res.sendStatus('200');
    }).catch(err => {
      console.log(err);
      res.status('418').json({ "error": "You have already unvoted" });
    });
  });


  return router;

}