import { Component, OnInit, ReflectiveInjector, Injectable } from '@angular/core';


class Body { }
class Doors { }
class Engine {
  start() {
    console.log('🚗开动鸟~~~');
  }
}

@Injectable()
export default class Car {
  constructor(
    private engine: Engine,
    private body: Body,
    private doors: Doors) { }

  run() {
    this.engine.start();
  }
};


@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.css']
})
export class InjectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let injector = ReflectiveInjector.resolveAndCreate([Car,
      Engine, Doors, Body]);
    let car = injector.get(Car);
    car.run();
  }

}
