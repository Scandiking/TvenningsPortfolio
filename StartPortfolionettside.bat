@echo off
chcp 65001 >nul
mode con: cols=120 lines=8
setlocal enabledelayedexpansion
color 0E

echo Starter localhost... [%date% %time%]
echo.
echo «You build on failure. You use it as a stepping stone. Close the door on the past. You don’t try to forget the mistakes, but you don’t dwell on it. You don’t let it have any of your energy, or any of your time, or any of your space»
echo --- Johnny Cash

type SurprisedPikachu.txt

echo. 
echo :) :) :)
call :Spinner

npm start

goto :eof

:Spinner
set "spinner=|/-\"
for /L %%i in (1,1,20) do (
    set /a mod=%%i %% 4
    set "char=!spinner:~%mod%,1!"
    <nul set /p=Loading !char!
    timeout /nobreak /t 1 >nul
    <nul set /p=
)
echo.
exit /b
