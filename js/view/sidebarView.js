

class SideBarView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);
  }

  init() {
    this.container.find("#guestInput").val(this.model.getNumberOfGuests());
    this.container.find("#menuCost").html(this.model.getTotalMenuPrice() + " SEK");

    this.container.find("#appendDishes").empty(); // it redraws the doms
    this.model.getFullMenu().forEach(dish => {
      this.container.find("#appendDishes").append(this.createDom(dish));
      // dynamiclly make a new controller for each dish 
    });

  }
  update(model, args) {
    switch (args) {
      case "numberOfGuests":
        this.init();
        break;
      case "menu":
        if (model.getFullMenu() === undefined || model.getFullMenu().length == 0) {
          this.disableBtn();
        }
        else {
          this.enableBtn();
        }
        this.init();
        break;
    }
  }
  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    this.init();
  }

  enableBtn() {
    this.container.find("#sidebarBtn").removeAttr("disabled");
  }

  disableBtn() {
    this.container.find("#sidebarBtn").attr("disabled", true);

  }

  createDom(dish) {
    let div = $("<tr>", { "id": dish.id });
    div.append($("<td>", { "class": "float-left" }).html(dish.name));
    div.append($("<td>").html(this.model.getPrice(dish.id)));
    console.log(div);
    return div;
  }
}