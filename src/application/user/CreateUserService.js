import {User} from "../../domain/user/User";

export class CreateUserService {
    constructor({repository}) {
        this._repository = repository;
    }

    execute({name, dni}){
        let user = new User();
        user._name = name;
        user._dni = dni;

        return this._repository.create({user})
    }
}