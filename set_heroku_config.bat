@echo off
@setlocal enabledelayedexpansion

REM general settings
call heroku config:set NPM_CONFIG_PRODUCTION=false
call heroku config:set HOST=0.0.0.0
call heroku config:set NODE_ENV=production

REM .env
heroku config:push

REM database.json
set DATABASE_JSON_STR=
for /f "delims=" %%a in (database.json) do (
  set LINE=%%a
  set DATABASE_JSON_STR=!DATABASE_JSON_STR! !LINE!
)
call heroku config:set SEQUELIZE_SETTINGS="%DATABASE_JSON_STR%"
