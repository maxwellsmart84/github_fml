
//Props to Ben Nadel for helping with structuring the _.template
//http://www.bennadel.com/blog/2411-using-underscore-js-templates-to-render-html-partials.htm


var repoMap = _.map(ghRepoData, function(el, idx, arr){
  return {name: el.name, description: el.description, UpdateAt: el.updated_at}
});

// var repoTpl = _.template(
//   "<ul> <% _.each (repoMap, function(el){ %><li><h1><a href="#"><%- el.name %></a></h1><p><%- el.description %></p><h6><%- el.UpdateAt %></h6>}</li>)</ul>");

var repoMapName = "";
var repoMapDesc = "";
var repoMapDesc = "";
_.each(repoMap, function(el, idx, arr){
  repoMapName += repoMap.el.name;
  repoMapDesc += repoMap.el.description;
  repoMapUpdt += repoMap.el.updated_at;
});


$
$( document ).ready(function(){
  $(".repo").append;




});
