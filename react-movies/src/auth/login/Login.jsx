import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

// Controlled form inputs
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    const body = {
      email,
      password,
    };

    fetch("http://localhost:3004/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('access_token', JSON.stringify(response));
        setUser(response);
        navigate('/');
      });
  }

  useEffect(() => {
    function validatePassword(password) {
      const specialCharacters = ['*', '#', '@', '!'];

      if (password <= 8) {
        setPasswordError('Password must be at least 8 characters.');
        return;
      }
  
      let hasSpecialCharacter = false;
  
      for (let character of password) {
        const hasCharacter = specialCharacters.includes(character);
  
        if (hasCharacter) {
          hasSpecialCharacter = true;
        }
      }
  
      if (!hasSpecialCharacter) {
        setPasswordError('Your password must have at least one special character.', specialCharacters)
      } else {
        setPasswordError(null);
      }
    }

    validatePassword(password);
  }, [password]);


  return (
    <Form style={{ maxWidth: "800px", margin: "0 auto" }} onSubmit={register}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      {passwordError && (
        <Form.Text className="text-red">{passwordError}</Form.Text>
      )}

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
