<form action="" method="post" class="formulario novalidate">
						<div class="row">
							<label for="field1" class="label">First name <span class="asterisk">*</span></label>
							<input type="text" class="field required" name="field1" id="field1" placeholder="Your first name" required data-parsley-error-message="This field can not be empty" />
						</div>

						<div class="row">
							<label for="field2" class="label">Last Name <span class="asterisk">*</span></label>
							<input type="text" class="field required" name="field2" id="field2" placeholder="Your last name" required data-parsley-error-message="This field can not be empty" />
						</div>

						<div class="row">
							<label for="field3" class="label">Email <span class="asterisk">*</span></label>
							<input type="email" class="field required" name="field3" id="field3" placeholder="Your emails" required data-parsley-trigger="change focusout" data-parsley-type="email" data-parsley-error-message="This field can not be empty" data-parsley-validation-minlength="0" />
						</div>

						<div class="row">
							<label for="field4" class="label">Country <span class="asterisk">*</span></label>
							<select class="field_select required" name="field4" id="field4" required data-parsley-error-message="This field can not be empty" >
								<option>Please choose one country</option>
								<option value="es">España</option>
								<option value=""></option>
							</select>
						</div>

						<div class="row">
							<label for="field5" class="label">Age <span class="asterisk">*</span></label>
							<input type="text" class="field required" name="field5" id="field5" placeholder="How old are you?" required data-parsley-error-message="This field can not be empty" />
							<p class="note">You must be over 18 to click the "send" button!</p>
						</div>

						<div class="row legal">
							<label for="field6" class="label"><input type="checkbox" class="field_checkbox required" name="field6" id="field6" required data-parsley-error-message="This field can not be empty" /> I agree to your <a href="http://sidiostedalimones.com">Terms</a> and I have read your <a href="">Privacy policy</a>, including the <a href="">Cookie use</a>. <span class="asterisk">*</span></label>

						</div>


						<div class="row buttons">
							<input type="submit" class="button submit inactive" value="Send" />
						</div>
					</form>
