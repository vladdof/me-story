const Router = require('express');
const User = require('./models/user');

const router = new Router();

function btoa(str) {
  return Buffer.from(str, 'binary').toString('base64');
}

function atob(encodedString) {
  return Buffer.from(encodedString, 'base64').toString('binary');
}

router.post('/api/sign-up', async (request, response) => {
  try {
    const { username, password, email } = request.body;

    const candidate = await User.findOne({ username });
    if (candidate) {
      response.status(400).json({ message: 'Пользователь с таким никнеймом уже существует' });
    } else {
      const user = new User({
        username,
        email,
        password: btoa(password),
      });

      await user.save();
      response.json({ message: 'Пользователь успешно зарегистрирован' });
    }
  } catch (error) {
    console.log('sign-up', error);
    response.status(400).json({ message: 'Произошла ошибка регистрации!' });
  }
});

router.post('/api/login', async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await User.findOne({ username });
    if (!user) {
      response.status(400).json({ message: `Пользователь ${username} не найден` });
    }

    const validPassword = password === atob(user.password);
    if (!validPassword) {
      response.status(400).json({ message: 'Введен неверный пароль' });
    }

    response.json({ token: 'authorized' });
  } catch (error) {
    console.log('login', error);
    response.status(400).json({ message: 'Произошла ошибка входа!' });
  }
});

module.exports = router;
