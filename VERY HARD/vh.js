class Person {
  name;
  job;
  age;
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log(`${this.name} is running for fun`);
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

const worker = new Person("Aaron", "Software Engineer", "19");
worker.fetchJob();

class Programmer extends Person {
  languages;
  busy;

  completeTask() {}

  offerNewTask() {}

  learnLanguage() {}

  listLanguages() {}
}
