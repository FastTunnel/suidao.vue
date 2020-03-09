const checks = {};
checks.check_email = (email) => {
    var patt = /^[A-Za-z0-9]+@[A-Za-z0-9-]+.[A-Za-z]+$/;
    return patt.test(email);
}

export default checks;