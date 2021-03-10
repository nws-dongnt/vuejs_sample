import { Person } from "./models/person/Person";
import { Gender } from "@/models/person/Person";
import { Hobbies } from '@/models/hobbies/Hobbies';

export const allHobbies: Hobbies[] = [
    new Hobbies({
        id: 'HB0000',
        name: "Meat",
        description: ""
    }),
    new Hobbies({
        id: 'HB0001',
        name: "Girl",
        description: ""
    }),
    new Hobbies({
        id: 'HB0002',
        name: "Boy",
        description: ""
    }),
    new Hobbies({
        id: 'HB0003',
        name: "Water",
        description: ""
    }),
    new Hobbies({
        id: 'HB0004',
        name: "Anime",
        description: ""
    }),
    new Hobbies({
        id: 'HB0005',
        name: "Manga",
        description: ""
    }),
    new Hobbies({
        id: 'HB0006',
        name: "Marvel",
        description: ""
    }),
    new Hobbies({
        id: 'HB0007',
        name: "DC",
        description: ""
    }),
]

export const allProfile: Person[] = [
    new Person({
        id: 'ID0000',
        avatar: 'https://i.ytimg.com/vi/6x3axmstyzQ/maxresdefault.jpg',
        firstName: "Monkey D.",
        lastName: "Luffy",
        gender: Gender.MALE,
        age: 22,
        dateOfBirth: "7/10/1999",
        everMarried: false,
        introduce: 'hihihihihihi',
        hobbies: [new Hobbies({
            id: 'HB0000',
            name: "Meat",
            description: ""
        })],
        socialAccount: "fb.com/luffy12312"
    }),
    new Person({
        id: 'ID0001',
        avatar: 'https://i.ytimg.com/vi/6x3axmstyzQ/maxresdefault.jpg',
        firstName: "Digger C.",
        lastName: "Luffy 2",
        gender: Gender.MALE,
        age: 25,
        dateOfBirth: "5/5/1989",
        everMarried: true,
        introduce: 'hahahahaha',
        hobbies: [
            new Hobbies({
                id: 'HB0000',
                name: "Meat",
                description: ""
            }),
            new Hobbies({
                id: 'HB0001',
                name: "Girl",
                description: ""
            })
        ],
        socialAccount: "fb.com/luffy2fb"
    })
]
