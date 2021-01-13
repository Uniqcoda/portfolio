import React from 'react';
import './style.scss';

export default function Contact() {
	return (
		<section id='contact' class='contact'>
			<h2>Get in touch!</h2>

			<div class='contact-wrapper'>
				{/* LEFT */}
				<div class='contact-left'></div>

				{/* RIGHT */}
				<div class='contact-right'>
					<h2 class='contact-heading'>Send a mail</h2>
					<form action=''>
						<div class='input-group'>
							<input name='fullName' type='text' class='field' />
							<label for='fullName' class='input-label'>
								Full Name
							</label>
						</div>
						<div class='input-group'>
							<input name='email' type='email' class='field' />
							<label for='email' class='input-label'>
								Email
							</label>
						</div>
						<div class='input-group'>
							<textarea name='message' id='' class='field'></textarea>
							<label for='message' class='message'>
								Message
							</label>
						</div>
						<input type='submit' class='submit-btn' value='Submit' />
					</form>
				</div>
			</div>
      
      <div className='contact1-details'>
				<div className='contact1'>
					<i className='fas fa-envelope'></i>
					etokwudomary@gmail.com
				</div>
				<div className='contact1'>
					<i className='fas fa-phone'></i>
					+2348067190580
				</div>
				<div className='contact1'>
					<i className='fab fa-github'></i>
					https://github.com/Uniqcoda
				</div>
			</div>
			<div className='social-media'>
				<a className='facebook' href='https://web.facebook.com/ecmary'>
					<img loading='lazy' src='/images/facebook.jpg' alt='facebook' />
				</a>
				<a className='twitter' href='https://twitter.com/uniqcoda'>
					<img loading='lazy' src='/images/twitter.png' alt='twitter' />
				</a>
				<a
					className='linkedin'
					href='https://www.linkedin.com/in/mary-etokwudo-972b0983/'
				>
					<img loading='lazy' src='/images/linkedin.png' alt='linkedin' />
				</a>
				<a className='github' href='https://github.com/Uniqcoda'>
					<img loading='lazy' src='/images/github.png' alt='github' />
				</a>
			</div>
		</section>
	);
}
