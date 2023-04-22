const athletesList = ["John Depp", "Sara Wik", "Den Miro", "Alan Woo", "Olga Sich", "Ivan Hal"];

class Athletes {
  constructor(athletesList) {
    this.athletes = athletesList;
    this.allAthletesRoot = document.querySelector(".all_athletes-list");
    this.selectedAthletesRoot = document.querySelector(".selected-athletes-list");
    this.selectedAthletes = [];
  }

  renderAllAthletes() {
    let html = "";

    this.athletes.forEach((athlete) => {
      if (!this.selectedAthletes.includes(athlete)) {
        html += `
          <li class ='athlete-list'>
            <span>${athlete}</span>
            <img src="../img/arrow_rigth.png" class="add-athlete-to-selected" data-athlete="${athlete}" />
          </li>
        `;
      }
    });

    this.allAthletesRoot.innerHTML = html;
    athletes.setupEventListeners();
  }

  renderSelectedAthletes() {
    let html = "";

    this.selectedAthletes.forEach((athlete) => {
      html += `
        <li class ='athlete-list'>
          <span>${athlete}</span>
          <img src="../img/arrow_left.png" class="remove-athlete-from-selected" data-athlete="${athlete}" />
        </li>
      `;
    });

    this.selectedAthletesRoot.innerHTML = html;
    athletes.setupEventListeners();
  }

  setupEventListeners() {
    const addButtons = document.querySelectorAll(".add-athlete-to-selected");
    const removeButtons = document.querySelectorAll(".remove-athlete-from-selected");

    addButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const athleteName = button.dataset.athlete;
        this.addAthleteToSelected(athleteName);
        this.renderAllAthletes();
        this.renderSelectedAthletes();
      });
    });

    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const athleteName = button.dataset.athlete;
        this.removeAthleteFromSelected(athleteName);
        this.renderAllAthletes();
        this.renderSelectedAthletes();
      });
    });
  }

  addAthleteToSelected(athleteName) {
    if (!this.selectedAthletes.includes(athleteName)) {
      this.selectedAthletes.push(athleteName);
      const index = this.athletes.indexOf(athleteName);
      if (index !== -1) {
        this.athletes.splice(index, 1);
      }
    }
  }

  removeAthleteFromSelected(athleteName) {
    const index = this.selectedAthletes.indexOf(athleteName);
    if (index !== -1) {
      this.selectedAthletes.splice(index, 1);
      this.athletes.push(athleteName);
    }
  }
}

const athletes = new Athletes(athletesList);
athletes.renderAllAthletes();
athletes.renderSelectedAthletes();
athletes.setupEventListeners();
