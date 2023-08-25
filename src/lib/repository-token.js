export class RepositoryToken {
  static KEY = 'token';

  constructor() {
    this.storage = localStorage;
  }

  get() {
    return this.storage.getItem(RepositoryToken.KEY);
  }

  set(value) {
    this.storage.setItem(RepositoryToken.KEY, value);
  }

  remove() {
    this.storage.removeItem(RepositoryToken.KEY);
  }
}
