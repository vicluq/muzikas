Scenario: I want to be able to share the link of a product search
GIVEN that i am in the home page
WHEN i fill the search bar with "produto"
AND i press the search button
THEN we should navigate to /search?query="produto"