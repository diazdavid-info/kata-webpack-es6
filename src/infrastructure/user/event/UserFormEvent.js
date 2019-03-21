
export default class UserFormEvent {

    constructor() {
        this._mapping = new UserFormMapping();
    }

    execute() {
        this._mapping.form.addEventListener("submit", event => this.handlerSubmitForm(event));
    }

    handlerSubmitForm(e) {
        this._mapping.userFormNameLabel = this._mapping.userFormName.value;
        e.preventDefault();
    }
}

class UserFormMapping {

    constructor() {
        this._form = document.getElementById('user-form');
        this._userFormName = document.getElementById('user-form-name');
        this._userFormNameLabel = document.getElementById('user-form-name-label');
        this._liList = document.getElementsByName('script__li');
    }

    get form() {
        return this._form;
    }

    get userFormName() {
        return this._userFormName;
    }

    get userFormNameLabel() {
        return this._userFormNameLabel;
    }

    set userFormNameLabel(value) {
        this._userFormNameLabel.innerHTML = value;
    }
}