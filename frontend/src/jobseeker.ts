import { User } from './User';

export class Jobseeker extends User{
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    uidType:string;
    uidNumber:number;
    keySkills:string;
    percentage_12th:number;
    percentage_10th:number;
    passOutYear:number;
    branch:string;
    pecentage_grad:number;

}
/*{
    "username": "abc",
    "password": "123",
    "emailId": "abc@gmail",
    "role": "jobseeker",
    "status": "true",
    "firstName": "nothing",
    "middleName": "bro",
    "lastname": "else",
    "gender": "male",
    "uidType": "adharcard1",
    "uidNumber": 456987,
    "keySkills": "find out key skills of mechanical jbranch",
    "percentage_10th": 69,
    "percentage_12th": 68,
    "passOutYear": "2019",
    "branch": "mechanical",
    "pecentage_grad": 65,
    "jsfeedback": null,
    "employer": null,
    "id": 1
}*/