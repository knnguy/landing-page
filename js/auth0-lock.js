const clientId = "WouQOQULCNjzNGqdUuIdcy0kgz4up7Nb"
const domain = "dev-o64lsn21gx2ybdkn.us.auth0.com"
console.log(window)
const options = {
  auth: {
    // redirectUrl: `${window.location.origin}/ui`,
    redirectUrl: `http://localhost:3000/ui`,
  },
  theme: {
    logo: "https://spot.rackspace.com/static-files/spot-logo-transparent.png",
    primaryColor: "#c91508",
  },
  languageDictionary: {
    emailInputPlaceholder: "Email",
    passwordInputPlaceholder: "Password",
    forgotPasswordAction: "Forgot Password?",
    title: "",
  },
  usernameStyle: "email",
  allowShowPassword: true,
}

const lock = new Auth0Lock(clientId, domain, options)

// Adjust the height of the Auth0 Lock widget
lock.on("show", function () {
  // Wait for the next tick to ensure the DOM has updated
  setTimeout(function () {
    const lockWidget = document.querySelector(".auth0-lock-widget")
    if (lockWidget) {
      lockWidget.style.height = "max-content"
      lockWidget.style.width = "350px"
    }
  }, 1)
})
