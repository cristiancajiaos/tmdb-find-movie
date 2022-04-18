import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  searchForm: FormGroup;
  result: string;

  constructor(
    private fb: FormBuilder,
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      input: new FormControl('')
    });
  }

  onSubmit(): void {
    this.movie.searchMovie(this.searchForm.value.input).subscribe(result => {
      this.result = JSON.stringify(result);
    });
  }

  reset(): void {
    this.result = '';
  }

}
