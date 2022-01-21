# Vue-Typescript Class Components

## Details

This is a Vue 2 project with TS using these libraries for component setup:
```vue-class-component```
```vue-property-decorator```


## Assignments

### table row
On the "Home" page is a table, add a row to this table that displays the totals of the other rows.
### Solution
I have used as approaced here the computed property to return the sum of each row with the help of the util function totalSum.
In order to render the data I have leveraged Buefy and used an imported footer component.


### Async/Await
In the mounted function the data for the table is being fetched, edited and placed in the tableData property with a promise chain. 
Rewrite this function but instead of chaining promises use async/await to do the exact same. 
### Solution
I made use of json-server to replicate a fake DB and axios as http manager which allows me to proper consume REST API.

THE GOOD
- persistent at reload
- data management through Vuex including error catching
- allows GET, POST, PUT, DELETE
THE BAD
- json-server not scalable for real applications but for the power of example I have used it.
--


### Add a security class
On the home page create a button that opens a modal window that contains a form. This form should allow you to add a security class to the table, also updating the totals.

### Transfer search
On the Transfers page you find a list of financial transfers with a search bar. Make the transferlist searchable by "recordDate".

### Style the transferRow.vue component
Rework the style for this component, using this design. Make it look as close as possible.
https://i.pinimg.com/736x/29/bc/e5/29bce59f6cdf71eb840d939ba05deff1--best-ui-design-app-ui-design.jpg 
If you for whatever reason do not have a similar result to the image, please let us know when you send in the work.

### Fix the update transfers button
Something is going wrong with this button, fix it and explain why it broke in the comments.

## Project setup
```
npm install
```
## Launch server to consume fake REST API
```
npx json-server --watch src/assets/db.json
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
