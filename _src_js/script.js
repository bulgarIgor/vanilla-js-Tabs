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
});
