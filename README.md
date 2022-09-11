# search-engine-comparison
A cypress testing suite that compares search results from various search engines.

The aim here is to help people get better search results by pooling the results from multiple different search engines. 

The tool utilizes Cypress, an automated testing framework. Google and others will ban you for using these tools, which is why I utilize delays throughout the script to slow down the searches. This means I both won't get banned and helps me from overwhelming the server. 

In the end, Cypress is not built well for this. I'm utilizing it here because it is fast and easy and I'm running what we at Jimmy & Neil Have Problems an alpha. The goal is to get a working prototype done in 1 hour. 

There are a few limitations to this approach. First, it's slow as hell and risks getting your IP banned by search engines for using a script. Second, it is not truly aggregating search results. Ideally, you could search in one place and grab aggregated results in one place as well. This would make comparison easier and improve our ability to avoid SEO clickbait and improve the quality of results. 
