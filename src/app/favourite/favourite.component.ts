import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent {

  @Input() isFavourite = false;
  @Output() change = new EventEmitter();
  faCoffee = faCoffee;

  onToggleFavourite() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({
      newValue: this.isFavourite
    });
  }

}

export interface IFavouriteChangedEventArgs {
  newValue: boolean;
}
