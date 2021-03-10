import { Hobbies } from '@/models/hobbies/hobbies';
import { SocialAccount } from '@/models/socialAccount/SocialAccount';

export enum Gender {
  MALE,
  FEMALE,
  OTHER
}

export class Person {
  public id?: string = '';
  public avatar?: string = '';
  public firstName!: string;
  public lastName!: string;
  public gender?: Gender = Gender.OTHER;
  public age!: number;
  public dateOfBirth!: string;
  public everMarried?: boolean = false;
  public introduce?: string = '';
  public hobbies?: Hobbies[] = [];
  public socialAccount?: string = '';
  constructor(init?: Partial<Person>) {
    Object.assign(this, init);
  }
}

