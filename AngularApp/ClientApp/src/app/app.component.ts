import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { promise } from 'protractor';
import { LowerCasePipe } from '@angular/common';


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
    forbiddenUserNames = ['chris', 'anna'];

    //ngOnInit() {
    //    this.sForm = new FormGroup({
    //        'userData': new FormGroup({
    //            'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //            'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
    //        }),            
    //        'gender': new FormControl('male'),
    //        'hobbies': new FormArray([])
    //    });

    //    // value change
    //    this.sForm.valueChanges.subscribe((val) => console.log(val));

    //    // status change
    //    this.sForm.statusChanges.subscribe((val) => console.log(val));

    //    // set form values on pageload

    //    this.sForm.setValue({
    //        'userData': {
    //            'username': 'max',
    //            'email': 'test@test.com'
    //        },
    //        'gender': 'female',
    //        'hobbies': []
    //    });

    //    // patch values to existing from or new form
    //    this.sForm.patchValue({
    //        'userData': {
    //            'username': 'max2'
    //        }
    //    });

    //}

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (this.sForm.get('hobbies') as FormArray).push(control);
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) != -1) {
            return { 'nameIsForbidden': true }
        }
        return null;
    }

    //async validators

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'nandigamramanarao1@gmail.com') {
                    resolve({ 'emailIsForbidden': true })
                } else {
                    resolve(null)
                }
            },1500)
        })
        return promise;
    }

    ronSubmit() {
        console.log(this.sForm);
        this.sForm.reset();
    }

  
    // Asignment .ts Code from here
    drpOptions = [];
    aForm: FormGroup
    forbiddenProjectname = 'test';
    ngOnInit() {
        this.drpOptions = ['stable', 'critical', 'finished'];
        this.aForm = new FormGroup({
            'projectname': new FormControl(null, [Validators.required, this.forbiddenproject.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.asyncforbiddenProjectemail),
                'status': new FormControl([this.drpOptions])
        });
        this.aForm.statusChanges.subscribe((val) => console.log(val));

    }

    forbiddenproject(c: FormControl): { [sa: string]: boolean } {
        if (this.forbiddenProjectname === c.value) {
            return { 'forbiddenProjectName': true }
        }
        return (null);
    }

    asyncforbiddenProjectemail(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value.toLowerCase());
                if (control.value === 'test') {
                    resolve({ 'emailforbidden': true })
                } else resolve(null)
            }, 1500)
        });
        console.log(promise+"test log");
        return promise;
    }

    assignmentSubmit() {
        console.log(this.aForm);
    }

    // Pipes Code start from here

    servers = [
        {
            instanceType: 'medium',
            name: 'Production Servers',
            status: 'stable',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'large',
            name: 'User Database',
            status: 'stable',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'small',
            name: 'Development Server',
            status: 'offline',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'small',
            name: 'Testing Environment Server',
            status: 'stable',
            started: new Date(15, 1, 2017)
        }
    ];
    getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
        return {
            'list-group-item-success': server.status === 'stable',
            'list-group-item-warning': server.status === 'offline',
            'list-group-item-danger': server.status === 'critical'
        };
    }

}
