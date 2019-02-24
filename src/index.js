import {CreateUserEvent} from "./infrastructure/user/event/CreateUserEvent";

const createUserEvent = new CreateUserEvent();
createUserEvent.execute();
