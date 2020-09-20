# Jonathon Lee
# Class 401
## Read 13

# Bearer Authorization




## Write the following steps in the correct order:
```
1. Register your application to get a client_id and client_secret
2. Receive authorization code
3. Ask the client if they want to sign in via a third party
4. Make a request to a third-party API endpoint
5. Redirect to a third party authentication endpoint
6. Receive access token
7. Make a request to the access token endpoint
```
```
What can you do with an authorization code?
Allows access and permission on behalf of the user.
What can you do with an access token?
Gives authorization access using a token to avoid constant logins.
What’s a benefit of using OAuth instead of your own basic authentication?
Oauth has an extra level of security by using authorization and access tokens. It helps avoid redundant logins by using tokens. By using authentication and creating access tokens we can do things like time out permission to a user. Meaning after a certain time has passed the user will have to login in an a new access token will need to be created. 
```



## Document the following Vocabulary Terms
```

- Client ID:
- Client Secret:
- Authentication Endpoint:
- Access Token Endpoint:
- API Endpoint:
- Authorization Code:
- Access Token:
- Preview:

```

Which 3 things had you heard about previously and now have better clarity on?
I learned how to create middleware to add security.
I finally understand what dotenv and gitignore are used for.
Connectivity between functions is less tangled in my brain and making more sense.
Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Oauth, organization, prioritization.
What are you most excited about trying to implement or see how it works?
I'd like to see if I can have my labs 11-13 fully running.
