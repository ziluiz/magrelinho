import { Dog } from './../dog';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { asyncScheduler } from 'rxjs';

type NewType = OnInit;

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements NewType{

  constructor( private dogService : DogService) {}

  ngOnInit(): void{
    this.loadDog();
  }

  loadDog() {
    this.dogService.getRandonDog().subscribe(
      {
        next : dog => this.dog = dog
      }
    );
  }



  dog : Dog = {} as Dog

  getName(): string{
    return this.dog.message.split("/")[4];
  }

}
