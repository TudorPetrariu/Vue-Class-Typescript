# Vue-Typescript Class Components

## Details

This is a Vue 2 project with TS using these libraries for component setup:
```vue-class-component```
```vue-property-decorator```


## TODOS

### table row
On the "Home" page is a table, add a row to this table that displays the totals of the other rows.
### Solution
I have used as approaced here the computed property to return the sum of each row with the help of the util function totalSum.
In order to render the data I have leveraged Buefy and used an imported footer component.
## THE BAD
- ideally business logic is not exposed in FE.
--

### Async/Await
In the mounted function the data for the table is being fetched, edited and placed in the tableData property with a promise chain. 
Rewrite this function but instead of chaining promises use async/await to do the exact same. 
### Solution
I made use of json-server to replicate a fake DB and axios as http manager which allows me to proper consume REST API.

## THE GOOD
- persistent at reload
- data management through Vuex including error catching
- allows GET, POST, PUT, DELETE
## THE BAD
- json-server not scalable for real applications but for the power of example I have used it.
--


### Add a security class
On the home page create a button that opens a modal window that contains a form. This form should allow you to add a security class to the table, also updating the totals.
### Solution
I have leveraged again the power of Buefy where I have made use of the input fields with a bit of pre-design.
The registering modal is triggered onClick from the Home where onSubmit triggers the POST method.

## THE GOOD
- minimal security class name validator
- async POST method
## THE BAD
- took time for buefy docs
- no validation for number input fields

### Transfer search
On the Transfers page you find a list of financial transfers with a search bar. Make the transferlist searchable by "recordDate".
### Solution
The sorted array was using the incorrect search index where a prop validator is required allowing the function to throw undefined.

### Style the transferRow.vue component
Rework the style for this component, using this design. Make it look as close as possible.

## THE GOOD
- good scss practice
- mobile friendly
## THE BAD
- no tailwind
- random color generator is copied
- not really desktop friendly
- ideally the scoped component css syntax lives in a dedicated file
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
### Docs
- json-server: https://github.com/typicode/json-server
- axios: https://github.com/axios/axios


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
