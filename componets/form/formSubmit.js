import {useRef} from "react";
import classes from "./form--submit.module.css";

function formSubmit(props) {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    function submitHandler(event){
        event.preventDefault()

        const inputEmail = emailInputRef.current.value;
        const inputPassword = passwordInputRef.current.value;

        props.onSubmit(inputEmail, inputPassword);
    }
    return (
        <form action="/api/form" method="post">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                required
                minLength="10"
                maxLength="20"
            />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default formSubmit;
