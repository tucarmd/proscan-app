
export class ApiBaseResponse {

  constructor(obj?: any) {
    if (typeof obj === 'string') {
      obj = JSON.parse(obj);
    }
    if (typeof obj === 'object') {
      Object.assign(this, obj);
    }
  }

  message: {
    success?: boolean;
    code?: number;
    description?: string;
  }

  get isSuccess() {
    return this.message && this.message.code === 0;
  }

  get isTimedOut() {
    return 0;
  }
}

export class ApiUserResponse extends ApiBaseResponse {
  data: User;
}

export class User extends ApiBaseResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}
export class UserLogin {
  email: string;
  password: string;
}
