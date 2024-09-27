import { User } from "src/app/models/app.model";

export class UserState {
  static #user: User;
  static #token: string;
   /*
   * @memberof UserState
   */
  /**
   * Initial some states. Be careful!
   */
  static init() {
  }

  /**
   * Reset all states. Should reset them after logout. Be careful!
   */
  static resetAll() {
    UserState.init();
    this.#user = null;
    this.#token = null;
  }

  static get user() {
    return this.#user;
  }

  static get token() {
    return this.#token;
  }

  static setAuthenticatedUser(user?: User, token?: string) {
    this.#user = user;
    this.#token = token;
  }

  static get isAuth() {
    return this.#token != null;
  }
}
