import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
   selector: 'app-input',
   templateUrl: './input.component.html',
   styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit{

   @Input()
   placeholder: string = '';

   @Output()
   onEnter: EventEmitter<string> = new EventEmitter();
   @Output()
   onDebounce: EventEmitter<string> = new EventEmitter();

   // Es un Observable
   debouncer: Subject<string> = new Subject;


   termino: string = '';

   constructor() {}

   ngOnInit(): void {
       this.debouncer
         .pipe(debounceTime(300)) // Si deja de recibir llamados luego de 300 ms se ejecuta el subscribe
         .subscribe( valor => {
            this.onDebounce.emit( valor );
         })
   }

   buscar() {
      this.onEnter.emit( this.termino );

   }

   teclaPresionada(){
      this.debouncer.next( this.termino );
   }
}
