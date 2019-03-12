import {CreateUserEvent} from "./infrastructure/user/event/CreateUserEvent";
import Vue from "vue";

const createUserEvent = new CreateUserEvent();
createUserEvent.execute();

var obj = {
    foo: 'barrrr'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})