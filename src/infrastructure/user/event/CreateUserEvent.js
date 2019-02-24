import {CreateUserService} from "../../../application/user/CreateUserService";
import {UserRepository} from "../repository/UserRepository";

const createUserElement = document.getElementById('create-user');

export class CreateUserEvent {
    execute() {
        if (createUserElement) {
            createUserElement.addEventListener('click', function () {
                const repository = new UserRepository();
                const service = new CreateUserService({repository});
                const data = {name: 'David', dni: '123456789'};
                service.execute(data)
                    .then(function (user) {
                        document.getElementById('data-user').innerHTML =
                            `El nombre es: ${user.name()} y el DNI: ${user.dni()}.`;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log('END');
            })
        }
    }
}
