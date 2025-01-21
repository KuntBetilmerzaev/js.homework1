const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

// your code
if (isAdmin === true && isVerifiedUser && (hasSpecialPermission || hasTemporaryPass === true)) {
    console.log(isAccess)
}

