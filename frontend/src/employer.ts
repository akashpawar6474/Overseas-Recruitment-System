import {User} from './User'
export class Employer extends User{
    regName:string;
    field:string;
    city:string;
    state:string;
    country:string;
    pincode:number;
    description:string;
    webaddress:string;
    points:number;
    placementPortalUrl:string;

    /*  {
        "username": "xyz",
        "password": "258",
        "emailId": "xyz@gmail",
        "role": "employer",
        "status": "true",
        "regName": "alfred",
        "field": "petrolum",
        "city": "jiddah",
        "state": "saudi",
        "country": "saudi",
        "pincode": 41412,
        "description": "petroleum production company ",
        "webAddress": "www.al",
        "points": 0,
        "placemetPortalUrl": null,
        "empFeedback": null,
        "id": 2
    },*/ 

}