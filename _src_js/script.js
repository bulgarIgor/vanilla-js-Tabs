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

  var urlPars = document.createElement('a');
  urlPars.href = "https://dev2.finastra.com/search?search=hello";

  console.log(
    urlPars.host + '\n' + // dev2.finastra.com with port "80" or "8080" or "3000"
    urlPars.protocol + '\n' + // If we use http or https
    urlPars.hostname + '\n' + // dev2.finastra.com only url
    urlPars.port + '\n' + // port "80" or "8080" or "3000"
    urlPars.pathname + '\n' + // after hostname/search, search is path name
    urlPars.hash + '\n' + // if we use hash #my-anchor
    urlPars.search + '\n' + // if you search something, in my case I search hello
    urlPars.origin + '\n' // origin is full host with protocol and port, in my case https://dev2.finastra.com:port
  );
});
