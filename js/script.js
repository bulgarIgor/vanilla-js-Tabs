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
    urlPars.host + '\n' +
    urlPars.protocol + '\n' +
    urlPars.hostname + '\n' +
    urlPars.port + '\n' +
    urlPars.pathname + '\n' +
    urlPars.hash + '\n' +
    urlPars.search + '\n' +
    urlPars.origin + '\n' +
    urlPars.hostname
  );
});

//# sourceMappingURL=../script.js.map
