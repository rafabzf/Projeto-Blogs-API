const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const configuration = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generation = ({
  email,
  password,
}) => jwt.sign({ email, password }, JWT_SECRET, configuration);

const authentication = (req, res, next) => {
  const tok = req.headers.authorization;

  if (!tok) return res.status(401).json({ message: 'Token not found' });

  try {
    const JWTdata = jwt.verify(tok, JWT_SECRET);

    req.user = JWTdata;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  generation,
  authentication,
};