// this file contains the React UI components

var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:''
    };

  }
  signIn(){
    // the code on lines 40-53 makes a post request to the /signin method with the parameters shown. 
    // When successful the promise is resolved in the then callback. On error the resposne is logged in the catch call back
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  // adding a render method that will display the UI for the signin component
  // on line 10 - sr-only is a class name used for screen readers. Using this class will hide the element
  // line 12 autofocus is a boolean attribute and useful for accessibility. It specifies that an <input> element should automatically get focus when the page loads
  //  all of the code below is html except for class attribute has been changed to className when used in JSX
  // onChange at line 18 and 20  is an event that occurs when the value of an element has been changed
  // setState on lines 5 and 8 queues all of the updates made to a component state and instructs React to re-render the component
  // the bind method creates a new function that when called had its 'this' keyword set to the provided value
  render() {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
          
          <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
        </form>
        <div>
          <Link to="/signup">{'Signup'}</Link>
        </div>
      </div>
    )
  }
  
}

class Signup extends React.Component{
  render() {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign up</h2>
          <label for="inputName" className="sr-only">Name</label>
          <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
          
          <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
        </form>
        <div>
          <Link to="/">{'Signin'}</Link>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
      <Route component={Signin} path="/"></Route>
      <Route component={Signup} path="/signup"></Route>
  </Router>,
document.getElementById('app'));


  


