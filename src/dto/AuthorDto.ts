export class AuthorDto{
    name: string;
    lastName: string;

    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
    }
}