# search-engine-comparison
A cypress testing suite that compares search results from various search engines.

The aim here is to help people get better search results by pooling the results from multiple different search engines. 

The tool utilizes Cypress, an automated testing framework. Google and others will ban you for using these tools, which is why I utilize delays throughout the script to slow down the searches. This means I both won't get banned and helps me from overwhelming the server. 

In the end, Cypress is not built well for this. I'm utilizing it here because it is fast and easy and I'm running what we at Jimmy & Neil Have Problems an alpha. The goal is to get a working prototype done in 1 hour. 

There are a few limitations to this approach. First, it's slow as hell and risks getting your IP banned by search engines for using a script. Second, it is not truly aggregating search results. Ideally, you could search in one place and grab aggregated results in one place as well. This would make comparison easier and improve our ability to avoid SEO clickbait and improve the quality of results. Finally, the script does not deliver clean data. In some cases, like Bing, selecting the search results (and not all links) is not easy. Thus, the data is not clean and requires improvement. 

For more information on the problem we are addressing with this project, check out the problem here [Some sites serve consistently bad content but rank high via SEO](https://jimmyandneilhaveproblems.com/Gordium/Problems/Some+sites+serve+consistently+bad+content+but+rank+high+via+SEO).

Below is a demo of the software as of 10/03/2022: 


https://user-images.githubusercontent.com/67113663/193739637-f432b5ea-4671-4f51-9793-7dceef1b3f5c.mov

## Directions
- Following Cypress's well documented setup process will allow you to run this script: https://docs.cypress.io/guides/getting-started/installing-cypress. 
- If you've completed the above process and would like to run it headless, you can do so with `yarn cypress run --env search=cars`, with the `env` specifying what search term to use. 
