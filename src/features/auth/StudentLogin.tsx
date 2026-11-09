import { useState } from "react";
import "./StudentLogin.css";

type AccountType = "school" | "personal";

function StudentLogin() {
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="student-login-container">
      <section className="student-login-card" aria-labelledby="login-title">
        {!accountType ? (
          <>
            <header className="login-header">
              <h1 id="login-title">Your learning starts here</h1>
              <p>How would you like to log in?</p>
            </header>
            <div className="account-choice-list">
              <button
                className="account-choice-button"
                type="button"
                onClick={() => setAccountType("school")}
              >
                <span className="account-choice-title">My School account</span>
                <span className="account-choice-description">
                  Sign in with your school code and student ID
                </span>
              </button>
              <button
                className="account-choice-button"
                type="button"
                onClick={() => setAccountType("personal")}
              >
                <span className="account-choice-title">Personal account</span>
                <span className="account-choice-description">
                  Sign in with your username
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="back-button"
              type="button"
              onClick={() => setAccountType(null)}
            >
              &larr; Choose another account type
            </button>
            <header className="login-header">
              <h1 id="login-title">
                {accountType === "school" ? "My School account" : "Personal account"}
              </h1>
              <p>
                {accountType === "school"
                  ? "Enter your school sign-in details."
                  : "Enter your personal sign-in details."}
              </p>
            </header>
            <form onSubmit={(event) => event.preventDefault()}>
              {accountType === "school" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="school-code">School code</label>
                    <input
                      id="school-code"
                      name="schoolCode"
                      type="text"
                      autoComplete="organization"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="student-id">Student ID</label>
                    <input
                      id="student-id"
                      name="studentId"
                      type="text"
                      autoComplete="username"
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button className="login-button" type="submit">
                Sign in
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default StudentLogin;
