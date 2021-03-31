import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: [
        MatButtonModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatAutocompleteModule

    ],
    exports: [MatButtonModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatAutocompleteModule
    ]
})
export class MaterialModule {}