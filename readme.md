# METADATA SCRAPING FROM A GIVEN WEB PAGE URL

This RESTful api takes a URL and return its metadata.

If the page has OG parameters set exclusively, then all the OG parameters are returned. However, If they are not set, other relevant details such as title, description are returned.

## Querying a `url`

Make a `POST` request to `https://<url>` with JSON payload containing `url`.

Eg:
```
{
	"url": "https://google.com"
}
```

It will return all the OG parameters if present. Eg
```
{
    "og:description": "Seasonal Holidays 2021 #GoogleDoodle",
    "og:image": "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-2xa.gif",
    "og:image:width": "1000",
    "og:image:height": "400",
    "og:url": "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-2xa.gif",
    "og:type": "video.other"
}
```
Other wise it will contains other relavent information. Eg
```
{
    "description": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
    "robots": "noodp",
    "Content-Type": "text/html; charset=UTF-8",
    "image": "/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595605-cst.gif",
    "title": "Google"
}
```

> If page is not found 404 error is returned.