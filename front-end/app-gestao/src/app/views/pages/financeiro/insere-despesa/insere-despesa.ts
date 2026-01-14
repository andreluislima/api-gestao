import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-insere-despesa',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule],
  templateUrl: './insere-despesa.html',
  styleUrl: './insere-despesa.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsereDespesa {
  fileName = '';
  onFileSelected(event: Event){
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length > 0){
      this.fileName = input.files[0].name;
    }
  }
}
