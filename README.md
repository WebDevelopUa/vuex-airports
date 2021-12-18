# vuex-airports

* [How To Manage State in a Vue.js Application with Vuex](https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-a-vue-js-application-with-vuex)

----------------------
These properties reflect the type of data the store holds:

* state for state (global data)
* mutations (commits that mutate data)
* getters (store computed properties)
* actions (dispatches that call mutations) - contain **LOGIC** - accepts two arguments:
    * the **context**, or the Vue app itself
        * has a **_commit_** method associated with it that you will use to call a mutation accepts two arguments:
            * the _name_ of the _mutation_ to call
            * the _payload_ or the data that the mutation will replace the state with
    * **payload**, or the data that you want to add to the store

**dispatch** function accepts two arguments:

* the _action_ _name_
* the _payload_ data that you are sending to the action

----------------------

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
