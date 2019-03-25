require('dotenv').config()

const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.AUTH_GOOGLE_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
      if (profile) {
        return done(null, profile)
      } else {
        return done(null, false)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

module.exports = passport
