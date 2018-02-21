window.addEventListener("load", function() {
  var allTabs = document.querySelectorAll("ul.tabs__nav > li");

  function clickMyTab(clickTab) {
    for (var i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.remove("active");
    }

    var clickedTab = clickTab.currentTarget;
    clickedTab.classList.add("active");

    clickTab.preventDefault();

    var myContentPanes = document.querySelectorAll(".tab__body-item");

    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }

    var anchorReference = clickTab.target,
      activePaneId = anchorReference.getAttribute("href"),
      activePane = document.querySelector(activePaneId);

    activePane.classList.add("active");
  }


  for (i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener("click", clickMyTab);
  }


  function parseUrl(url){
    var parserLink = document.createElement('a');
    parserLink.href = url;
    return parserLink;
  }
  parserLink = parseUrl("https://dev2.finastra.com/search?search=hello");

  console.log(parserLink.host); // dev2.finastra.com with port "80" or "8080" or "3000"
  console.log(parserLink.protocol); // If we use http or https
  console.log(parserLink.hostname); // dev2.finastra.com only url
  console.log(parserLink.port); // port "80" or "8080" or "3000"
  console.log(parserLink.pathname); // after hostname/search, search is path name
  console.log(parserLink.hash); // if we use hash #my-anchor
  console.log(parserLink.search); // if you search something, in my case I search hello
  console.log(parserLink.origin); // origin is full host with protocol and port, in my case https://dev2.finastra.com:port
});
