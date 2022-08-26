# Steps

1. Run npm install to install dependancies.
2. Use npm start to start application along with the json server[backend].
3. There are two filters set at the top one for [last 3 months(broken by month)] and All
4. Based on those filters user can see total rewards as well as breakup for rewards.

## Dependencies

1. json-server and concurrently are used to provide mock api.

### Other Comments

1. Check mocks folder for mock data. db.json contains the transaction data.
2. dataGenerator.js is used for generating mock data.
3. Calculation of rewards is done in calculateReward.js
4. Ohter helper functions can be found on helper.js
5. Transaction table is displayed to show transaction and calculated rewards for reference.
6. Franction values are not accounted for rewards (eg. $100.99 will have same reward point as $100);
7. React application will be hosted to port 8000 and JSON server apis at 8080.
