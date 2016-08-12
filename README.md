# Synopsis
An updated version of my routed_contact project. It is a simple contact list built with React.js & React Router

# Code Sample 
```javascript
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ViewA}/>
      <Route path="/murray/:width/:height" component={ViewB}/>
    </Route>
    <Route path="/c" component={ViewC}/>
  </Router>
), document.querySelector('.app'))
```
# Motivation 
Following the instructions of...
"Update your contacts to use nested routes. Create a main route and main component that defines the common elements across your entire contacts app."

