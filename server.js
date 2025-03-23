// server.js
const express = require('express');
const path = require('path');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./sqlite/users.db');

// Session ayarı
app.use(session({
  secret: 'gizli-anahtar',
  resave: false,
  saveUninitialized: false
}));

// EJS ayarları
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Public klasörü
app.use(express.static(path.join(__dirname, 'public')));

// Kullanıcıyı session ile tüm sayfalara geçirme (middleware)
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  next();
});

// Veritabanı tablo oluştur
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

// Sayfa route'ları
app.get('/', (req, res) => res.render('index'));
app.get('/aboutus', (req, res) => res.render('aboutus'));
app.get('/bertrandInfo', (req, res) => res.render('bertrandInfo'));
app.get('/bertrandJeux', (req, res) => res.render('bertrandJeux'));
app.get('/choc-petrolier', (req, res) => res.render('choc-petrolier'));
app.get('/citoyen', (req, res) => res.render('citoyen'));
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

// Kullanıcı kaydı
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
  
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) return res.send('Bir hata oluştu!');
  
      if (row) {
        // Kullanıcı zaten kayıtlıysa direkt session'a kaydet ve yönlendir
        req.session.username = row.name; // veritabanındaki ismi al
        return res.redirect('/');
      }
  
      // Yeni kullanıcıysa veritabanına ekle
      const stmt = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
      stmt.run(name, email, password, function(err) {
        if (err) return res.send('Kayıt başarısız oldu!');
  
        req.session.username = name;
        res.redirect('/');
      });
      stmt.finalize();
    });
  });
  

// Port ayarı
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});