import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('Sarna');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
        }
        console.log(email, password, name);
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleNameChange}
                    type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;