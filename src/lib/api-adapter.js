import { http } from './http-common';

class ApiAdapter {
  // eslint-disable-next-line class-methods-use-this
  callApi(endpoint, payload) {
    return http.post(endpoint, payload);
  }

  // eslint-disable-next-line consistent-return
  async login({ username, password }) {
    try {
      const { data } = await this.callApi('/login', {
        username,
        password,
      });

      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async signUp({ username, password, email }) {
    try {
      await this.callApi('/sign-up', {
        username,
        password,
        email,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    const defaultError = 'Что-то пошло не так. Перезагрузите страницу';
    this.error = {
      msg: error?.response?.data?.message || defaultError,
      status: error?.response?.status,
    };

    console.error('Ошибка: ', this.error);
    throw this.error;
  }
}

export const apiAdapter = new ApiAdapter();
