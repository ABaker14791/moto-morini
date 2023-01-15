import { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	async function handleOnSubmit(e) {
		e.preventDefault();
		sendContactEmail(data);
		setSubmitted(true);
	}

	async function sendContactEmail(data) {
		const response = await fetch("/api/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const detailsEmailConfirmation = await response.json();
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(data);
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<>
			{submitted ? (
				<div>Form submitted, thank you.</div>
			) : (
				<form onSubmit={handleOnSubmit} className={styles.contact__form}>
					<h3>Get in touch</h3>
					<p>Enter your Email below and we shall get back to you.</p>
					<div className={styles.contact__formGroup}>
						<label>Name</label>
						<input type="text" name="name" onChange={handleChange} />
					</div>

					<div className={styles.contact__formGroup}>
						<label>Email</label>
						<input type="email" name="email" onChange={handleChange} />
					</div>

					<div className={styles.contact__formGroup}>
						<label>Message</label>
						<textarea name="message" onChange={handleChange} />
					</div>

					<input
						className={styles.contact__button}
						type="submit"
						value="Send"
					/>
				</form>
			)}
		</>
	);
};

export default ContactForm;
