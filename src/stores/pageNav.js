import { decorate, observable, action } from "mobx";

export default class PageNav {
  page = "home";
  homeActive = "active";
  compActive = "";
  comp1Active = "";
  comp2Active = "";
  comp3Active = "";
  accomActive = "";
  aboutActive = "";
  contactActive = "";

  setPage(page) {
    this.page = page;

    this.updateActiveStyle(page);
  }

  updateActiveStyle(page) {
    switch (page) {
      case "home":
        this.homeActive = "active";
        this.compActive = "";
        this.comp1Active = "";
        this.comp2Active = "";
        this.comp3Active = "";
        this.accomActive = "";
        this.aboutActive = "";
        this.contactActive = "";
        break;
      case "robocombat":
        this.homeActive = "";
        this.compActive = "active";
        this.comp1Active = "active";
        this.comp2Active = "";
        this.comp3Active = "";
        this.accomActive = "";
        this.aboutActive = "";
        this.contactActive = "";
        break;
        case "lifo":
          this.homeActive = "";
          this.compActive = "active";
          this.comp1Active = "";
          this.comp2Active = "active";
          this.comp3Active = "";
          this.accomActive = "";
          this.aboutActive = "";
          this.contactActive = "";
          break;
          case "engc":
            this.homeActive = "";
            this.compActive = "active";
            this.comp1Active = "";
            this.comp2Active = "";
            this.comp3Active = "active";
            this.accomActive = "";
            this.aboutActive = "";
            this.contactActive = "";
            break;
        case "accomodation":
          this.homeActive = "";
          this.compActive = "";
          this.comp1Active = "";
          this.comp2Active = "";
          this.comp3Active = "";
          this.accomActive = "active";
          this.aboutActive = "";
          this.contactActive = "";
          break;
      case "about":
        this.homeActive = "";
        this.compActive = "";
        this.comp1Active = "";
        this.comp2Active = "";
        this.comp3Active = "";
        this.accomActive = "";
        this.aboutActive = "active";
        this.contactActive = "";
        break;
      default:
        break;
    }
  }
}

decorate(PageNav, {
  page: observable,
  setPage: action
});

// import { observable, action } from 'mobx';

// class Person {
//     name = "John"
//     age = 42
//     showAge = false

//     get labelText() {
//         return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
//     }

//     setAge(age) {
//         this.age = age;
//     }
// }
// // when using decorate, all fields should be specified (a class might have many more non-observable internal fields after all)
// decorate(Person, {
//     name: observable,
//     age: observable,
//     showAge: observable,
//     labelText: computed,
//     setAge: action
// })

// export default PageNav;
