const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  //exibir todos os devs
  async index(req, res) {
    const { user } = req.headers;
    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });
    return res.json(users);
  },
  //salvando um novo usuario
  async store(req, res) {
    //destruturação -- recendo as informaçẽos vendo pelo body
    const { username } = req.body;

    //verificando se o usuario ja nao existe dentro da database
    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    //salvando no banco as informações do usuario
    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
