
export class UserRepository {
    create({user}){
        return new Promise(function (resolve, reject) {
            if(user.name() === 'David') {
                resolve(user);
            } else {
                reject('mal')
            }
        });
    }
}