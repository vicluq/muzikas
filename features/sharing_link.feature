Scenario: I want to be able to share the link of a product search
GIVEN that i am in the home page
WHEN i fill the search bar with "produto"
AND i press the search button
THEN we should navigate to /search?query="produto"

Scenario: I want to be able to share the link of a product page
GIVEN that i see the "product name" card
WHEN i click the "product name" card with product_id of 123
THEN i should navigate to /product?product_id="123"
AND I should see the product page with title "product name"