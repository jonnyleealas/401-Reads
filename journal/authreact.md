Login will have a form
type in some stuff
check button
call login
login goes to context
if true
this becomes true
Auth component will be main consumer of context
# try catch
- if we know that something is going to throw an error we should use a try catch to catch that error. That way our code doesn't break.
- try catch would be useful for signing in. The code will throw an error if the signing in password is in correct. The try catch will catch the error. You could even give the user a .warn message by using: console.warn("incorrect password")
# Javascript
- runs code line per line. 
- first line of code will be setIsLogged(false)
- second line of code will be setUser({})
```
const logOut = ()=>{
    setIslogged(false)
    setUser({})
}
```