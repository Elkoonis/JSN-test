const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const { createServer } = require('http');
const app = express();
const port = 3000;

mongoose
  .connect('mongodb+srv://Super:admin@superhero.uhluy.mongodb.net/hero?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

const SuperHeroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    required: true,
  },
  origin_description: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});


const SuperHero = mongoose.model('SuperHero', SuperHeroSchema);

app.get('/', (req, res) => {

  // создание
  // SuperHero.create({
  //   nickname: 'Superman',
  //   real_name: 'Clark Kent',
  //   origin_description: 'he was born Kal-El on the planet Krypton, before being rocketed to earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…' ,
  //   superpowers: 'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…' ,
  //   catch_phrase: ' “Look, up in the sky, its a bird, its a plane, its Superman!” ',
  //   images: 'link to image',
  // })
  //   .then(superHero => res.send(superHero))
  //   .catch(err => res.send(err));

  

// -------------------------------------------------


  // удаление для нескольких deleteMany / для одного deleteOne()

  //  SuperHero.deleteMany({real_name: 'Clark Kent'}({

  // })
  //     .then(superHero => res.send(superHero))
  //     .catch(err => res.send(err));

// -------------------------------------------------

  // SuperHero.updateOne({real_name: 'Clark Kent'}, {real_name: 'Clark Ment'}({
  // })
  //   .then(superHero => res.send(superHero))
  //   .catch(err => res.send(err));



  SuperHero.find()
    .then(superHero => res.send(superHero))
    .catch(err => res.send(err));


  
    
});

fetch('http://localhost:3000/')
        .then(res => res.text())
        .then(text => console.log(text))

        
        // -------------------------------------------------
       // К сожалению так не работает, а дальше выучить не успел
       // document.querySelector('.out').textContent = text;


const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));

