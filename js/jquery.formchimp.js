

(function($, window, document, undefined) {
	$.fn.formchimp = function(settings) {
		var $form = $(this);
		var $body = $('body');
		var actionUrl = $form.attr('action').replace('/post?', '/post-json?').concat('&c=?');
		var $button = $form.find('[type="submit"]');
		var defaults = {
			'appendElement': $form,					
	
			'buttonSelector': $button,				
	
			'buttonText': '', 						
	
			'debug': false, 						
	
			'errorMessage': '',						
	
			'onMailChimpSuccess': function() {},	
	
			'onMailChimpError': function() {},		
	
			'responseClass': 'mc-response',			
	
			'successMessage': '',					
	
			'url': actionUrl,						
	
		};
		var originalButtonText = defaults.buttonSelector.text();
		var $responseContainer;

		

		$.extend(defaults, settings);

		

		$($form).on('submit', function(event) {
			
	
			event.preventDefault();

			
	
			$body.removeClass('mc-success mc-error').addClass('mc-loading');

			
	
			if ($('.' + defaults.responseClass).length === 0) {
				
		
				$responseContainer = $('<div/>').addClass(defaults.responseClass).appendTo(defaults.appendElement);
			} else {
				
		
				$responseContainer.html('');
			}

			
	
			$.ajax({

				url: defaults.url,
				data: $(this).serialize(),
				dataType: 'jsonp'

			}).done(function(data) {
				
		
				if (defaults.debug) {
					
			
					console.log(JSON.stringify(data));
				}

				
		
				var responseMessage = data.msg;

				
		
				if(!isNaN(responseMessage.charAt(0)) && responseMessage.charAt(2) === '-') {
					
			
					responseMessage = responseMessage.substring(3);
				}

				
		
				$body.addClass('mc-' + data.result).removeClass('mc-loading');

				
		
				if (data.result === 'success') {
					
			
					if (defaults.successMessage !== '') {
						
				
						responseMessage = defaults.successMessage;
					}

					
			
					if (defaults.buttonText !== '') {
						
				
						defaults.buttonSelector.text(defaults.buttonText);
					}

					
			
					$(document).trigger('mailChimpSuccess');

					
			
					defaults.onMailChimpSuccess.call();
				} else { 
			
					
			
					if (defaults.errorMessage !== '') {
						
				
						responseMessage = defaults.errorMessage;
					}

					
			
					if (defaults.buttonText !== '') {
						
				
						defaults.buttonSelector.text(originalButtonText);
					}

					
			
					$(document).trigger('mailChimpError');

					
			
					defaults.onMailChimpError.call();
				}

				
		
				$responseContainer.html(responseMessage);
			});
		});
	};
})(jQuery, window, document);