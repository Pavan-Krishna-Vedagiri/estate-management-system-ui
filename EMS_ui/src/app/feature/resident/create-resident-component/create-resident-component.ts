import { ChangeDetectorRef, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonApiService } from '../../../core/services/common-api-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Resident } from '../../../shared/models/Resident';
import { RestEndPoints } from '../../../shared/models/endPoints';
import { PopUpCompoonent } from "../../../shared/pop-up-compoonent/pop-up-compoonent";
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-resident-component',
  imports: [ReactiveFormsModule, PopUpCompoonent],
  templateUrl: './create-resident-component.html',
  styleUrl: './create-resident-component.css',
})
export class CreateResidentComponent {

  residentForm !: FormGroup;
  readonly residentData !: Resident;
  @Input() roomId !: string;

  showPopup: boolean = false;
  responseMessage: string = "";

  constructor(private commonApiService: CommonApiService, private fb: FormBuilder, private router: Router, private cd: ChangeDetectorRef) {
    this.residentData = {
      id: "",
      firstName: 'Ravi',
      lastName: 'Kumar',
      email: 'ravi.kumar@example.com',
      phoneNumber: '9876543210',
      guardianName: 'Suresh Kumar',
      guardianEmail: 'suresh.k@example.com',
      guardianPhoneNumber: '9123456780',
      socialSecurityNumber: 'SSN001',
      occupationName: 'Software Engineer',
      companyName: 'HCLTech',
      address: {
        addressId: "",
        doorNo: '12A',
        street: 'Mount Road',
        city: 'Chennai',
        country: 'India',
        pincode: '600001'
      }
    };
  }

  ngOnInit() {

    this.residentForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      guardianName: [''],
      guardianEmail: ['', Validators.email],
      guardianPhoneNumber: [''],
      socialSecurityNumber: [''],
      occupationName: [''],
      companyName: [''],
      address: this.fb.group({
        addressId: [''],
        doorNo: [''],
        street: [''],
        city: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.required]
      })
    });

  }

  createResisdent() {
    if (this.residentForm.valid) {
      const resident: Resident = this.residentForm.value;
      const resp = this.commonApiService.post("/residents", resident);
      console.log(resp.subscribe({
        next: (data: any) => {
          console.log(data);
          this.responseMessage = data.message;
          this.cd.detectChanges();
        },
        error: (err) => {
          if (err.status == 500) {
            alert(err.error);
          }
        }
      }));
    }
    this.resetForm();
    this.showPopup = true;
  }

  resetForm() {
    this.residentForm.reset();
  }

  autoPopulate() {
    this.residentForm.patchValue(this.residentData);
  }

  closeMessagePop(eventValue: boolean) {
    this.showPopup = eventValue;
    this.router.navigate(['/dashboard'])
  }

  @Output() sendResidentDetails : EventEmitter<Resident> = new EventEmitter<Resident>();
  sendResidentDetailsFn() {
    const resident : Resident = this.residentForm.value;
    this.sendResidentDetails.emit(resident);
  }
}
