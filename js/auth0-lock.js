const clientId = "WouQOQULCNjzNGqdUuIdcy0kgz4up7Nb"
const domain = "dev-o64lsn21gx2ybdkn.us.auth0.com"
const redirectUrl = `https://supreeth-ngpc-dev.platform9.horse/ui`

const options = {
  auth: {
    redirectUrl,
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

// const auth0 = new Auth0Client({
//   domain,
//   clientId,
// })

var auth0Client = null

createAuth0Client({
  domain,
  clientId,
}).then((auth0) => {
  auth0Client = auth0
})

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

lock.on("authenticated", function (authResult) {
  lock.getUserInfo(authResult.accessToken, function (error, profile) {
    if (error) {
      console.log("error")
      return
    }

    // Save the token and profile information in local storage or a global variable
    console.log("authenticated lock on")
  })
})
