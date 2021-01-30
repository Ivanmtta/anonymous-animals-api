const { Router } = require('express');
const path = require('path');
const fileSystem = require('fs');
const hashName = require('./../lib/hashName');

const router = Router();

router.get('/avatar/:user', (request, response) => {
  const userName = request.params.user;
  const avatars = fileSystem.readdirSync('./avatars');
  if (avatars[0] == '.DS_Store') {
    avatars.splice(0, 1);
  }
  const avatarIndex = hashName(userName, avatars.length);
  response.sendFile(path.resolve(`./avatars/${avatars[avatarIndex]}`));
});

router.get('/animal/:name', (request, response) => {
  const animalName = request.params.name;
  response.sendFile(path.resolve(`./avatars/${animalName}.png`));
});

module.exports = router;