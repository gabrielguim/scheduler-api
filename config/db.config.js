const mongoose = require('mongoose');

let db = mongoose.connection;

module.exports = () => {
  let is_test;
  process.argv.map(argumento => {
    is_test = is_test || argumento === 'test';
  });

  const perfil = is_test ? 'scheduler_testdb' : 'schedulerdb';

  /**
   * Uses the local address if has no environment vars
   */
  const db_string = process.env.MONGODB_URI || 'mongodb://localhost/' + perfil;
  if (!db.readyState) {
    const conn = mongoose.connect(db_string, { useNewUrlParser: true });
  }

  db.once('error', console.error.bind(console, 'Something really strange happened...'));
  db.once('open', () => {
    db.opened = true;
    console.log('DB Ready to go! ' + db_string);
  });

  return db;
};