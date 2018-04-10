import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private id = 1;
  private login = 'admin';
  private email = 'admin@gmail.com';

  constructor() { }

  getConfig(): ConfigOptions {
    return { id: this.id, login: this.login, email: this.email };
  }

  setConfig(options: Partial<ConfigOptions>): void {
    ({ id: this.id, login: this.login, email: this.email } = options);
  }

}

export interface ConfigOptions {
  id: number;
  login: string;
  email: string;
}
