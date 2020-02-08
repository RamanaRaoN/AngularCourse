import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  constructor() {
    //console.log('c call');
  }

  title = 'app';
  serverElements = [{ type: 'server', name: 'first server', content: 'server content' }];
  onServerAdd(serverData: { sName: string, sContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.sName,
      content: serverData.sContent
    });
  }

  onBlueprintAdd(bluePrintData: { sName: string, sContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.sName,
      content: bluePrintData.sContent
    });
  }
 /**
  *  custom properties and event binding assignment
  * @param firenumber
  */
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  startGame(firenumber: number) {
    if (firenumber % 2 === 0) {
      this.evenNumber.push(firenumber);
    }
    else {
      this.oddNumber.push(firenumber);
    }
    console.log(this.oddNumber);
    console.log(this.evenNumber);
  }

  /*
  Recipe book componet code
*/
  loadFeature = "recipe";
  onSelectTab(feature: string) {
    this.loadFeature = feature;
  }

  //ngOnInit() {
  //  // throw new Error("Method not implemented.");
  //  // console.log('');
  //}


  /*inject service*/
  //accounts: { name: string, status: string }[] = [];
  //constructor(private accountservice:AccountService) {
  //}

  //ngOnInit() {
  //  this.accounts = this.accountservice.accounts;
  //}


    // Forms Code template driven opproch


    //onSubmit(form: NgForm) {
    //    console.log(form);
    //}



    @ViewChild('f') signUpForm: NgForm
    defQuestion = 'pet'
    genders = ['male', 'female']
    user = {
        uname: '',
        email: '',
        secreat: '',
        answer: '',
        gender:'',

    }
    formSubmitted = false;

    //using ngModelGroup on ui
    sugUsername() {
        const sUsername = 'user';
        this.formSubmitted = false;
        this, this.signUpForm.form.patchValue({
            userData: {
                userName: sUsername
            }
        });
    }

    onSubmit() {
        //console.log(this.signUpForm);
        this.formSubmitted = true;

        this.user.uname = this.signUpForm.value.userData.userName;
        this.user.email = this.signUpForm.value.userData.email;
        this.user.secreat = this.signUpForm.value.secret;
        this.user.gender = this.signUpForm.value.gender;
        this.user.answer = this.signUpForm.value.answers;
        this.signUpForm.reset();
    }

    //Reactive driven opproch

    Genders = ['male', 'female'];

    sForm: FormGroup;

    ngOnInit() {
        this.sForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(null, Validators.required),
                'email': new FormControl(null, [Validators.required, Validators.email])
            }),            
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });

    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.sForm.get('hobbies')).push(control);
    }


    ronSubmit() {
        console.log(this.sForm);
    }

}
