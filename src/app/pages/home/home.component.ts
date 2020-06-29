import { Component, OnInit, HostBinding  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { GetDataService } from 'src/app/core/service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dniGroup: FormGroup
  dniToSearch;
  loading = false;
  private index: number = 0;
  dummyData;
  userData;
  controlTabla = false;
  controlInput = false;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private userService: GetDataService
  ) { }

  ngOnInit(): void {
    this.dniGroup = this.fb.group({
      dniToSearch: ['', [Validators.required, Validators.maxLength(8)] ]
    })
  }

  searchDni() {
    let dni = this.dniGroup.value.dniToSearch;
    console.log(dni);
    this.loading = true;

    this.userService.getById(dni).subscribe( response => {
      console.log('response --->', response);
      this.loading = false;
        this.showToast('top-right', 'success', dni);
        this.controlTabla = true;
        this.setUserData(response);
    }, err => {
      console.log(err);
      this.loading = false;
      this.controlTabla = false;
      this.showToast('top-right', 'danger', dni);
    })
  }
  //Call y detalles de la notificación
  showToast(position, status, dni) {
    this.index += 1;
    if (status === 'success') {
      this.toastrService.show(
      'Success',
      `Genial! Parece que el DNI '${dni}' es valido`,
      { position, status });
    } else if (status === 'danger') {
      this.toastrService.show(
      'Failed',
      `Lo sentimos, parece que el DNI '${dni}' no se encuentra en nuetros registros`,
      { position, status });
    }
  }

  //datos falsos
  getDummyData() {
    this.dummyData = {
      nombre: "Luis",
      apellido: "Suarez",
      fechaDeNac: "Junio 03 2020",
      scoring: "Aprobado",
      CUIT: "26130668-LASH"
    }
  }
  setUserData(data) {
    this.userData = {
      nombre: data.fullName,
      fechaDeNac: data.birthday,
      scoring: data.scoring,
      CUIT: data.cuit
    }
    console.log(this.userData);
    
  }
}
