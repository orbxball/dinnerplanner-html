window.onload= function() {
  // We instantiate our model
  const model = new DinnerModel();
  /* TEST CODE */
  model.addDishToMenu(1);

  let activeViews = [];
  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  // make an object with the html-doms relevant to the welcomeView
 
  const welcomeView = new WelcomeView($("#welcomeView"), model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView);

  welcomeView.show();

  const backView = new BackView($("#backView"), model);
  const backCtrl = new BackCtrl(backView, model);
  backView.hide();


 
  const sideBarView = new SideBarView($("#sideBarView"), model);
  const sidebarCtrl = new SideBarCtrl(sideBarView, model);
  sideBarView.show();
  

  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  dishSearchView.hide();

  const dishItemView = new DishItemView($("#dishItemView"), model);
  dishItemView.hide();

  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  dishDetailsView.hide();

  const dishFinishedView = new DishFinishedView($("#dishFinishedView"), model);
  dishFinishedView.hide();


  const dishPrintView = new DishPrintView($("#dishPrintView"), model);
  dishPrintView.hide();

  
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
};
