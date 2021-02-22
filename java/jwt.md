Jason Web Token is make of 3 parts.
1. The header which tells which algorithm is used to calculate jwt.
2. The payload which is an object with information about who you are.
3. A signature which is the token the authorizes the you.

# Resource
Protected resource: The thing that needs to be accessed. 
# Resource Owner
The person who has access to the resource and the person who can grant access to the resource.
# Resource Server
The server that is hosting the resource. This is where the resource lives.
# Client 
The app that needs access and is asking for access on behalf of the owner of the resource.
# Authorization Server
Takes care of communication with the resource server to issuing access tokens to the client.


# Flow
Authorization code flow:
    1. user logs on to printing service. Client go access my photos from google so you can print them. Because the resource uses oAuth the client has to contact the authorization server to request access.
    2. User wants access so client asks authorization server.
    3. Authorization server must now ask the resource owner to confirm that the client is allowed to access the resource.
    4. Resource owner says its ok.
    5. Auth server sends the client an authorization token.
         6. Client uses the authorization token and send it back to the auth server.
            The reason for this is to request an access token. 
            It gets the authorization token and then exchanges that for an access token.
                7. Client uses the access token to gain access to the google drive.
                Google drive uses that access token and sends it to the authorization server to verify that the access token is valid. If the access token is correct google drive will grant the client access to the requested resources. In this case google drive is the resource and the user is the owner of the resources held in google drive.


# Flow 2(less secure) Useful for specific apps for js
1. User asks app to use resource.
2. Client asks auth server for access token.
3. Auth server asks user to verify app and give the ok to grant a token.
4. Authorization server sends access token directly to the client. 
5. Client sends access token to google drive. 
7. This is implicit flow and never uses authorization token.

# Flow 3 (big use case)
Client credentials Flow: When the client is trustworthy(micro services).
This is great for managing communication between micro services.