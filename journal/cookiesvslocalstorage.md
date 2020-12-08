# Cookies vs Local Storage

## Cookies
- Small files on your users computer.
- Hold client specific data and website.
- Web server and cliend can access
- Allows server to deliver a page tailored to a particular user.
- Contains script with data in the cookie. 
- Carries info from one website to the next.
- Contains key value pairs.
- Convientent way of carriing data from one site to the next.
- Server machine is not burdened with cookies. 
- 4KB of storage


## localStorage
- Stores data on a clients computer.
- Saves key value pairs on web browser.
- No expiration date.
- Only accessed by js and HTML5.
- User can clear browser data/cache.
- 5MB of storage.
- Data is not sent back to to the server each time an HTTP request is made. 
- Reduced amount of traffice between client and server.


## Differences
- Cookies are for server side reading while localStorage is for client side.
- When choosing which to use we need to know which side needs the data. Does the client need the data or the server.
