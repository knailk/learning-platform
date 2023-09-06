export const COOKIE_KEY = {
  PAID: 'paid',
  LOGGED_IN: 'logged_in',
  VERIFIED: 'verified',
  EMAIL: 'EMAIL',
  EMAIL_FORGOTTEN: 'EMAIL_forgotten',
  USER_TYPE: 'user_type',
  SYNC_ANSWER: 'sync_answer',
  ANONYMOUS_ID: 'anonymous_id',
  ANONYMOUS_TEST_USER_ID: 'anonymous_test_user_id',
  PAYMENT_STATUS: 'payment_status',
  NEXT_LOCALE: 'NEXT_LOCALE',
};

class CookieStorage {
  constructor(cookie) {
    this.cookie = cookie;
    this.expires = 24 * 60 * 60;
  }

  get(cookieKey) {
    try {
      const cookieValue = this.cookie.get(cookieKey);

      if (cookieValue) return JSON.parse(cookieValue);
      return cookieValue;
    } catch (error) {
      console.log(`CookieStorage:get('${cookieKey}') error`, error);
      return null;
    }
  }

  set(cookieKey, data) {
    try {
      const cookieValue = JSON.stringify(data);

      this.cookie.set(cookieKey, cookieValue, { expires: this.expires });
    } catch (error) {
      console.log(`CookieStorage:set('${cookieKey}') error`, error);
    }

    return this;
  }

  delete(cookieKey) {
    this.cookie.remove(cookieKey);
  }

  setLoggedIn() {
    this.set(COOKIE_KEY.LOGGED_IN, true);
    return this;
  }

  getLoggedIn() {
    return this.get(COOKIE_KEY.LOGGED_IN);
  }

  setEmailForgotten(data) {
    this.set(COOKIE_KEY.EMAIL_FORGOTTEN, data);
    return this;
  }

  getEmailForgotten() {
    return this.get(COOKIE_KEY.EMAIL_FORGOTTEN);
  }

  setUserSession(data) {
    this.set(COOKIE_KEY.EMAIL, data.email);
    this.set(COOKIE_KEY.VERIFIED, data.verified);

    return this;
  }

  getVerified() {
    return this.get(COOKIE_KEY.VERIFIED);
  }

  clear() {
    Object.values(COOKIE_KEY)
      .filter((key) => key !== 'NEXT_LOCALE')
      .forEach((key) => this.delete(key));
  }

}

export default CookieStorage;
