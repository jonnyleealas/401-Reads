# Clients
Clients build around JSONA:API  are able to take advantage of its fearutes around efficiently caching responses, sometimes eliminating netowrk requests entierly.
```
{
  "links": {
    "self": "http://example.com/articles",
    "next": "http://example.com/articles?page[offset]=2",
    "last": "http://example.com/articles?page[offset]=10"
  },
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
      "comments": {
        "links": {
          "self": "http://example.com/articles/1/relationships/comments",
          "related": "http://example.com/articles/1/comments"
        },
        "data": [
          { "type": "comments", "id": "5" },
          { "type": "comments", "id": "12" }
        ]
      }
    },
    "links": {
      "self": "http://example.com/articles/1"
    }
  }],
  "included": [{
    "type": "people",
    "id": "9",
    "attributes": {
      "firstName": "Dan",
      "lastName": "Gebhardt",
      "twitter": "dgeb"
    },
    "links": {
      "self": "http://example.com/people/9"
    }
  }, {
    "type": "comments",
    "id": "5",
    "attributes": {
      "body": "First!"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "2" }
      }
    },
    "links": {
      "self": "http://example.com/comments/5"
    }
  }, {
    "type": "comments",
    "id": "12",
    "attributes": {
      "body": "I like XML better"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    },
    "links": {
      "self": "http://example.com/comments/12"
    }
  }]
}

```

The response above contains the rist in a collection of "articles", as well as links to subsequent memebers in that collections. It also contains resources linked to the article, including its auther and comments. Last but not least, links are provided that can be used to fetch or update any of these resources.
JSON:API covers creating and updatin reosurces as well, not jsut responses.

# Status
Versions of JSON:API will always be backwards compatible using a never remove, only add strategy. 

# JSON:API  
JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests.

JSON:API is designed to minimize both the number of request and the amount of data transmitted between clients and servers. This efficiency is achieved withour comproimsing readability, fleibility, od discoverability.

JSON:API requires use of the JSON:API media type for exchanging data.

# Client Responsibilities
Clients Must send alls JSON data request documents with the header. 
# Top Level
A json object must be at the root of every json api request and response containgin data. 