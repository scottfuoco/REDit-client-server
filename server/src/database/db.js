import pg from 'pg';
import config from '../../config';

const dbconfig = {
  host: config.get('POSTGRES_HOST'),
  user: config.get('POSTGRES_USER'),
  password: '123456', 
  database: 'intolesson'
}

const database= new pg.Pool(dbconfig);

export default database