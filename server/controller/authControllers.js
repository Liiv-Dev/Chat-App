export const signUp = (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, } = req.body;
  } catch (error) {
    console.log(error);
  }
}

export const login = (req, res) => {


}

export const logout = (req, res) => {


}