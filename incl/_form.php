<form action="" method="post" class="formulario" novalidate>
						<div class="row">
							<label for="field1" class="label">First name <span class="asterisk">*</span></label>
							<input type="text" class="field field_text required" name="field1" id="field1" placeholder="Your first name"
							data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout"
							data-parsley-validation-minlength="0"
							required />
						</div>

						<div class="row">
							<label for="field2" class="label">Last Name <span class="asterisk">*</span></label>
							<input type="text" class="field field_text required" name="field2" id="field2" placeholder="Your last name"  data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout"
							data-parsley-validation-minlength="0"
							required />
						</div>

						<div class="row">
							<label for="field3" class="label">Email <span class="asterisk">*</span></label>
							<input type="email" class="field field_text required" name="field3" id="field3" placeholder="Your emails"
							data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout"
							data-parsley-type="email"
							data-parsley-validation-minlength="0"
							required />
						</div>

						<div class="row">
							<label for="field4" class="label">Country <span class="asterisk">*</span></label>
							<select class="field field_select required" name="field4" id="field4"
							data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout focusin"
							required>
								<option value>Please choose one country</option>
								<option value="es">España</option>
								<option value="mo">Motril</option>
							</select>
						</div>

						<div class="row">
							<label for="field5" class="label">Age <span class="asterisk">*</span></label>
							<input type="text" class="field field_text required" name="field5" id="field5" placeholder="How old are you?"
							data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout"
							data-parsley-validation-minlength="0"
							required />
							<p class="note">You must be over 18 to click the "send" button!</p>
						</div>

						<div class="row legal">
							<label for="field6" class="label"><input type="checkbox" class="field field_checkbox required" name="field6" id="field6"
							data-parsley-error-message="This field can not be empty"
							data-parsley-trigger="change focusout"
							data-parsley-validation-minlength="0"
							required /> I agree to your <a href="">Terms</a> and I have read your <a href="">Privacy policy</a>, including the <a href="">Cookie use</a>. <span class="asterisk">*</span></label>
						</div>


						<div class="row buttons">
							<input type="submit" class="button submit inactive" value="Send" />
						</div>
					</form>
