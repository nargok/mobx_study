import { observable } from 'mobx';

class TodoStore {
  @observable todos = [];
}

const todoStore = new TodoStore();
