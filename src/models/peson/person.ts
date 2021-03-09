import { Hobbies } from '@/models/hobbies/hobbies';
import { SocialAccount } from '@/models/socialAccount/SocialAccount';

export class Person {
  public id?: string = '';
  public avatar?: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public gender?: Gender = Gender.OTHER;
  public age?: number = 0;
  public everMarried: boolean = false;
  public introduce: string = '';
  public hobbies: Hobbies[] = [];
  public socialAccount: SocialAccount[] = [];
  constructor(init?: Partial<Person>) {
    Object.assign(this, init);
  }
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER
}

