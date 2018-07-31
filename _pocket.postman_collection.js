module.exports = {
  "info": {
    "_postman_id": "626435f2-dd84-428d-9b98-72cfb8ba0adc",
    "name": "_pocket",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "convert request token to a Pocket access token",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          {
            "key": "X-Accept",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "body": {},
        "url": {
          "raw": "https://getpocket.com/v3/oauth/authorize?consumer_key=78811-6782138b2a9e3a35a2ad90da&code=16599fdd-2252-4b37-1e14-0fe5fe",
          "protocol": "https",
          "host": [
            "getpocket",
            "com"
          ],
          "path": [
            "v3",
            "oauth",
            "authorize"
          ],
          "query": [
            {
              "key": "consumer_key",
              "value": "78811-6782138b2a9e3a35a2ad90da"
            },
            {
              "key": "code",
              "value": "16599fdd-2252-4b37-1e14-0fe5fe"
            }
          ]
        },
        "description": "https://getpocket.com/v3/oauth/authorize?consumer_key&code"
      },
      "response": []
    },
    {
      "name": "get request token",
      "request": {
        "method": "POST",
        "header": [],
        "body": {},
        "url": {
          "raw": "https://getpocket.com/v3/oauth/request?consumer_key=78811-6782138b2a9e3a35a2ad90da&redirect_uri=pocketapp78811:authorizationFinished",
          "protocol": "https",
          "host": [
            "getpocket",
            "com"
          ],
          "path": [
            "v3",
            "oauth",
            "request"
          ],
          "query": [
            {
              "key": "consumer_key",
              "value": "78811-6782138b2a9e3a35a2ad90da"
            },
            {
              "key": "redirect_uri",
              "value": "pocketapp78811:authorizationFinished"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "authorize user",
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"consumer_key\":\"78810-35a36cd48823f1a74958f2c2\",\n\"redirect_uri\":\"https://getpocket.com/developer/app/78810/35a36cd48823f1a74958f2c2\"}"
        },
        "url": {
          "raw": "https://getpocket.com/auth/authorize?request_token=16599fdd-2252-4b37-1e14-0fe5fe&redirect_uri=pocketapp78811:authorizationFinished",
          "protocol": "https",
          "host": [
            "getpocket",
            "com"
          ],
          "path": [
            "auth",
            "authorize"
          ],
          "query": [
            {
              "key": "request_token",
              "value": "16599fdd-2252-4b37-1e14-0fe5fe"
            },
            {
              "key": "redirect_uri",
              "value": "pocketapp78811:authorizationFinished"
            }
          ]
        },
        "description": "https://getpocket.com/v3/get/?access_token=da0b8ca8-2851-8d70-c79c-9145ff%26state=%5C%27in+which+our+hero%5C%27&consumer_key=78810-35a36cd48823f1a74958f2c2"
      },
      "response": []
    },
    {
      "name": "get my stuff",
      "request": {
        "method": "POST",
        "header": [],
        "body": {},
        "url": {
          "raw": "https://getpocket.com/v3/get?consumer_key={{consumer_key}}&access_token={{access_token}}&state=all&sort=newest",
          "protocol": "https",
          "host": [
            "getpocket",
            "com"
          ],
          "path": [
            "v3",
            "get"
          ],
          "query": [
            {
              "key": "consumer_key",
              "value": "{{consumer_key}}"
            },
            {
              "key": "access_token",
              "value": "{{access_token}}"
            },
            {
              "key": "state",
              "value": "all",
              "description": "\n\n"
            },
            {
              "key": "sort",
              "value": "newest"
            }
          ]
        }
      },
      "response": [
        {
          "id": "9b436278-4f00-400b-82e2-f6b7dd07cbf0",
          "name": "get my stuff",
          "originalRequest": {
            "method": "POST",
            "header": [],
            "body": {},
            "url": {
              "raw": "https://getpocket.com/v3/get?consumer_key={{consumer_key}}&access_token={{access_token}}&state=all&sort=newest",
              "protocol": "https",
              "host": [
                "getpocket",
                "com"
              ],
              "path": [
                "v3",
                "get"
              ],
              "query": [
                {
                  "key": "consumer_key",
                  "value": "{{consumer_key}}"
                },
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                },
                {
                  "key": "state",
                  "value": "all",
                  "description": "\n\n"
                },
                {
                  "key": "sort",
                  "value": "newest"
                }
              ]
            }
          },
          "status": "OK",
          "code": 200,
          "_postman_previewlanguage": "json",
          "header": [
            {
              "key": "Connection",
              "value": "keep-alive",
              "name": "Connection",
              "description": "Options that are desired for the connection"
            },
            {
              "key": "Content-Type",
              "value": "application/json",
              "name": "Content-Type",
              "description": "The mime type of this content"
            },
            {
              "key": "Date",
              "value": "Fri, 27 Jul 2018 03:57:45 GMT",
              "name": "Date",
              "description": "The date and time that the message was sent"
            },
            {
              "key": "P3P",
              "value": "policyref=\"/w3c/p3p.xml\", CP=\"ALL CURa ADMa DEVa OUR IND UNI COM NAV INT STA PRE\"",
              "name": "P3P",
              "description": "This header is supposed to set P3P policy, in the form of P3P:CP=\"your_compact_policy\". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this header with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies."
            },
            {
              "key": "Server",
              "value": "Apache",
              "name": "Server",
              "description": "A name for the server"
            },
            {
              "key": "Status",
              "value": "200 OK",
              "name": "Status",
              "description": "Custom header"
            },
            {
              "key": "X-Frame-Options",
              "value": "SAMEORIGIN",
              "name": "X-Frame-Options",
              "description": "Clickjacking protection: \"deny\" - no rendering within a frame, \"sameorigin\" - no rendering if origin mismatch"
            },
            {
              "key": "X-Limit-Key-Limit",
              "value": "10000",
              "name": "X-Limit-Key-Limit",
              "description": "Custom header"
            },
            {
              "key": "X-Limit-Key-Remaining",
              "value": "9998",
              "name": "X-Limit-Key-Remaining",
              "description": "Custom header"
            },
            {
              "key": "X-Limit-Key-Reset",
              "value": "3491",
              "name": "X-Limit-Key-Reset",
              "description": "Custom header"
            },
            {
              "key": "X-Limit-User-Limit",
              "value": "500",
              "name": "X-Limit-User-Limit",
              "description": "Custom header"
            },
            {
              "key": "X-Limit-User-Remaining",
              "value": "498",
              "name": "X-Limit-User-Remaining",
              "description": "Custom header"
            },
            {
              "key": "X-Limit-User-Reset",
              "value": "3491",
              "name": "X-Limit-User-Reset",
              "description": "Custom header"
            },
            {
              "key": "X-Source",
              "value": "Pocket",
              "name": "X-Source",
              "description": "Custom header"
            },
            {
              "key": "transfer-encoding",
              "value": "chunked",
              "name": "transfer-encoding",
              "description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
            }
          ],
          "cookie": [
            {
              "expires": "Mon Jan 18 2038 19:14:07 GMT-0800 (PST)",
              "httpOnly": false,
              "domain": "getpocket.com",
              "path": "/",
              "secure": false,
              "value": "qt95nbvlti10ik252k7i9sldb2",
              "key": "PHPSESSID"
            },
            {
              "expires": "Wed Mar 30 2033 21:34:12 GMT-0700 (PDT)",
              "httpOnly": false,
              "domain": "getpocket.com",
              "path": "/",
              "secure": false,
              "value": "1e4g9d00p7467n3ePpTcHW7f3dA3p4cp6f2l55zdrpEb85b1c4e50xWfI4frh4af",
              "key": "sess_guid"
            },
            {
              "expires": "Mon Jan 18 2038 19:14:07 GMT-0800 (PST)",
              "httpOnly": false,
              "domain": "getpocket.com",
              "path": "/",
              "secure": false,
              "value": "1522816452",
              "key": "sess_start_time"
            },
            {
              "expires": "Thu Jul 26 2018 22:41:56 GMT-0700 (PDT)",
              "httpOnly": true,
              "domain": "getpocket.com",
              "path": "/",
              "secure": true,
              "value": "1e4g9d00p7467n3ePpTcHW7f3dA3p4cp6f2l55zdrpEb85b1c4e50xWfI4frh4af",
              "key": "auth_guid"
            }
          ],
        }
      ]
    }
  ]
}