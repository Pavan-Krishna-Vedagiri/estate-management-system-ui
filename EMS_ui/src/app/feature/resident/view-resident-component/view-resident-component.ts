import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonApiService } from '../../../core/services/common-api-service';
import { Resident } from '../../../shared/models/Resident';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopUpCompoonent } from '../../../shared/pop-up-compoonent/pop-up-compoonent';

@Component({
  selector: 'app-view-resident-component',
  imports: [ ReactiveFormsModule, PopUpCompoonent],
  templateUrl: './view-resident-component.html',
  styleUrl: './view-resident-component.css',
})
export class ViewResidentComponent {

  residentForm !: FormGroup;
  residentData !: Resident;
  showPopup: boolean = false;
  responseMessage: string = "";

  constructor(private commonApiService: CommonApiService, 
    private fb: FormBuilder, 
    private router: Router, 
    private route : ActivatedRoute,
    private cd: ChangeDetectorRef) {
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

  ngOnInit() {

    const residentId = this.route.snapshot.paramMap.get("id");
    this.commonApiService.get(`/residents/${residentId}`).subscribe({
      next : (data : any) => {
        this.residentData = data.data;
        this.residentForm.patchValue(this.residentData);
        this.responseMessage = data.message;
      }
    }
    )

  }

  updateResident(){
    const residentId = this.route.snapshot.paramMap.get("id");
    this.residentData = this.residentForm.value;
    this.commonApiService.put(`/residents/${residentId}`, this.residentData).subscribe(
      {
        next : (data : any) =>{
          this.responseMessage = data.data;
        }
      }
    );
    this.showPopup = true;
  }

  closeMessagePop(event : boolean){
    this.showPopup = event;
    this.router.navigate(['/dashboard']);
  }
}
