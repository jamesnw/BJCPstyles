# BJCPstyles
2015 BJCP style guide in a programmer-friendly format.
This provides 2 ways of accessing the data. You can work directly with the styles.js file, which has 1 JSON object called 'styles'. Alternatively you can work with the API, which provides a few convenience methods to getting the info you want.
## API calls
1. categoryCount() returns the number of top level categories
2. categories() returns a list of top level category names as an array of strings
3. styleNames() returns a list of all style names as an array of strings
4. styleCount() returns the number of styles
5. stylesList() returns a list of all the styles
