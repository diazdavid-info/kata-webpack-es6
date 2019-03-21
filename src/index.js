import {CreateUserEvent} from "./infrastructure/user/event/CreateUserEvent";
import UserFormEvent from "./infrastructure/user/event/UserFormEvent";

const createUserEvent = new CreateUserEvent();
createUserEvent.execute();


const userFormEvent = new UserFormEvent();
userFormEvent.execute();