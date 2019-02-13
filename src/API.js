class API {
  static init() {
    this.baseURL = 'http://10.218.6.167:3000'
    this.userURL = this.baseURL + '/users'
    this.loginURL = this.baseURL + '/login'
    this.signupURL = this.baseURL + '/signup'
    this.queriesURL = this.baseURL + '/queries'
    this.userQueriesURL = this.baseURL + '/user/queries'
  }

  static getUserQueries() {
    return this.get(this.userQueriesURL)
  }

  static login(user) {
    return this.post(this.loginURL, user)
  }

  static signup(user) {
    return this.post(this.signupURL, user)
  }

  static sendQuery(query) {
    return this.post(this.queriesURL, query)
  }

  static get(url) {
    return fetch(url, {
      headers: { 'Authorization': localStorage.getItem('token') }
    }).then(resp => resp.json())
  }

  static post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }
}

API.init()

export default API
