const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       const role = decodedToken.role;
       req.auth = {
           userId: userId,
           role: role
       };
       next();
   } catch(error) {
        console.error("Authentication error:", error);
        res.status(401).json({ error });
   }
};
