
//Props to Ben Nadel for helping with structuring the _.template
//http://www.bennadel.com/blog/2411-using-underscore-js-templates-to-render-html-partials.htm


var repoMap = _.map(ghRepoData, function(el, idx, arr){
  return {name: el.name, description: el.description, UpdateAt: el.updated_at}
});

// var repoTpl = _.template(
//   "<ul> <% _.each (repoMap, function(el){ %><li><h1><a href="#"><%- el.name %></a></h1><p><%- el.description %></p><h6><%- el.UpdateAt %></h6>}</li>)</ul>");

//Thanks to Sally K for getting me out of this rut!
var repoMapHTML = "";
_.each(repoMap, function(el, idx, arr){
  repoMapHTML += "<div class = repo-map>" +
  "<h3>" + "<a href=#>" + el.name + "</a>" + "</h3>" +
  "<p>" + el.description + "</p>" +
  "<h6>" + el.UpdateAt + "</h6>"
  + "</div>";
});

var eventMap = _.map(ghEventData, function(el, idx, arr){
  return {userName: el.actor.login, repoName: el.repo.name, fork: el.payload.ref, commitsArr: el.payload.commits};
});

var commitData = _.pluck(eventMap, "commitsArr");

var commitFlatten= _.flatten (commitData);

 

var commitClean = _.each(commitFlatten, function(el, idx, arr){
  console.log()
})



$
$( document ).ready(function(){
  $(".repo").append(repoMapHTML);




});
