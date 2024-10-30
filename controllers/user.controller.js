const signInUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "ok",
    });
    console.log("Signed in Successfully!");
  } catch (error) {
    console.error("Sign-in Error:", error);
    res.status(500).json({ message: "Sign-in failed" });
  }
};

const registerUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "ok",
    });
    console.log("Registered Successfully!");
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};

export { signInUser, registerUser };
