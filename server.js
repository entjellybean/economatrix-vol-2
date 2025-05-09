const express = require('express');
const path = require('path');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const { hashPassword, comparePassword } = require('./lib/hash-password');

const app = express();
const db = new sqlite3.Database('./sqlite/users.db');

app.use(session({
  secret: 'key-secret',
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.username = req.session.username;
  next();
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS stackelberg_quantities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER DEFAULT 0,
            cout INTEGER,
      A INTEGER,
      B INTEGER,

      qm INTEGER,
      qd INTEGER,
      qc INTEGER,
      btn1 TEXT,
      btn2 TEXT,
      btn3 TEXT,
      btn4 TEXT,
      btn5 TEXT,
      btn6 TEXT,
      btn7 TEXT,
      btn8 TEXT,
      btn9 TEXT,
      all_q_optimal BOOLEAN DEFAULT 0,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS stackelberg_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      choice INTEGER,
      role TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/aboutus', (req, res) => res.render('aboutus'));
app.get('/bertrandInfo', (req, res) => res.render('bertrandInfo'));
app.get('/bertrandJeux', (req, res) => res.render('bertrandJeux'));
app.get('/choc-petrolier', (req, res) => res.render('choc-petrolier'));
app.get('/connecter', (req, res) => res.render('connecter'));
app.get('/cournotInfo', (req, res) => res.render('cournotInfo'));
app.get('/cournotJeux', (req, res) => res.render('cournotJeux'));
app.get('/covid', (req, res) => res.render('covid'));
app.get('/crise-immobilier', (req, res) => res.render('crise-immobilier'));
app.get('/criseSannitaireInfo', (req, res) => res.render('criseSannitaireInfo'));
app.get('/criseSubprimeInfo', (req, res) => res.render('criseSubprimeInfo'));
app.get('/dirig', (req, res) => res.render('dirig'));
app.get('/hopital', (req, res) => res.render('hopital'));
app.get('/hypocritaire', (req, res) => res.render('hypocritaire'));
app.get('/immobilier', (req, res) => res.render('immobilier'));
app.get('/invest', (req, res) => res.render('invest'));
app.get('/laGrandeDepressionInfo', (req, res) => res.render('laGrandeDepressionInfo'));
app.get('/leChocPetrolierInfo', (req, res) => res.render('leChocPetrolierInfo'));
app.get('/nashInfo', (req, res) => res.render('nashInfo'));
app.get('/ouvrier', (req, res) => res.render('ouvrier'));
app.get('/poli-occid', (req, res) => res.render('poli-occid'));
app.get('/politicien', (req, res) => res.render('politicien'));
app.get('/prisonerInfo', (req, res) => res.render('prisonerInfo'));
app.get('/prisonerJeux', (req, res) => res.render('prisonerJeux'));
app.get('/QuatrecrisesJeux', (req, res) => res.render('QuatrecrisesJeux'));
app.get('/royaum', (req, res) => res.render('royaum'));
app.get('/savoir', (req, res) => res.render('savoir'));
app.get('/stackelbergInfo', (req, res) => res.render('stackelbergInfo'));
app.get('/stackelbergJeux', (req, res) => res.render('stackelbergJeux'));
app.get('/TheoriesDeJeux', (req, res) => res.render('TheoriesDeJeux'));
app.get('/stackelberg-cc', (req, res) => res.render('stackelberg-cc'));

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.send('error');

    if (row) {
      req.session.username = row.name;
      return res.redirect('/');
    }

    try {
      const hashedPassword = await hashPassword(password);
      const stmt = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
      stmt.run(name, email, hashedPassword, function (err) {
        if (err) return res.send('error');
        req.session.username = name;
        res.redirect('/');
      });
      stmt.finalize();
    } catch (error) {
      console.error(error);
      return res.send('Hash error!');
    }
  });
});

app.post('/login', (req, res) => {
  const { name, password } = req.body;
  console.log("Login request:", name, password); 

  db.get('SELECT * FROM users WHERE name = ?', [name], async (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Sunucu hatası');
    }

    if (!user) {
      console.log("Kullanıcı bulunamadı"); 
      return res.status(401).send('Kullanıcı bulunamadı.');
    }

    const isMatch = await comparePassword(password, user.password);
    console.log("Password match:", isMatch); 
    if (!isMatch) {
      return res.status(401).send('Şifre yanlış.');
    }

    req.session.username = user.name;
    res.redirect('/');
  });
});


app.post('/stackelberg/save', (req, res) => {
  const { choice, role } = req.body;
  const username = req.session.username;

  if (username) {
    db.get('SELECT id FROM users WHERE name = ?', [username], (err, row) => {
      const user_id = row ? row.id : 0;

      const stmt = db.prepare('INSERT INTO stackelberg_logs (user_id, choice, role) VALUES (?, ?, ?)');
      stmt.run(user_id, choice, role, function (err) {
        if (err) {
          console.error(err.message);
          return res.status(500).send('non success.');
        }
        res.status(200).send('success.');
      });
      stmt.finalize();
    });
  } else {
    const stmt = db.prepare('INSERT INTO stackelberg_logs (user_id, choice, role) VALUES (?, ?, ?)');
    stmt.run(0, choice, role, function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send('non success.');
      }
      res.status(200).send('success.');
    });
    stmt.finalize();
  }
});

app.post('/stackelberg/save-quantities', (req, res) => {
  const {
    cout, A, B, qm, qd, qc,
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
  } = req.body;

  const username = req.session.username;

  const qmFloat = parseFloat(qm);
  const qdFloat = parseFloat(qd);
  const qcFloat = parseFloat(qc);
  const coutFloat = parseFloat(cout);
  const AFloat = parseFloat(A);
  const BFloat = parseFloat(B);

  let all_q_optimal = false;
  if (
    !isNaN(qmFloat) && !isNaN(qdFloat) && !isNaN(qcFloat) &&
    !isNaN(coutFloat) && !isNaN(AFloat) && !isNaN(BFloat)
  ) {
    const q_mono = (AFloat - coutFloat) / (2 * BFloat);
    const q_leader = q_mono;         
    const q_follower = q_mono / 2;   
    const q_half_mono = q_mono / 2;  

    const tol = 0.01;
    const check = (a, b) => Math.abs(a - b) < tol;

    if (
      check(qmFloat, q_leader) &&
      check(qdFloat, q_follower) &&
      check(qcFloat, q_half_mono)
    ) {
      all_q_optimal = true;
    }
  }

  const insertData = [
    cout, A, B, qm, qd, qc,
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
    all_q_optimal ? 1 : 0
  ];

  const query = `
    INSERT INTO stackelberg_quantities (
      user_id, cout, A, B, qm, qd, qc,
      btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
      all_q_optimal
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const saveToDB = (user_id) => {
    const stmt = db.prepare(query);
    stmt.run(user_id, ...insertData, function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send('non success.');
      }
      res.status(200).send('success.');
    });
    stmt.finalize();
  };

  if (username) {
    db.get('SELECT id FROM users WHERE name = ?', [username], (err, row) => {
      const user_id = row ? row.id : 0;
      saveToDB(user_id);
    });
  } else {
    saveToDB(0);
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server: http://localhost:${PORT}`);
});
