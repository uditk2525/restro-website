var clock;
		
		$(document).ready(function() {
            
			var clock;

			clock = $('.clock').FlipClock({
		        clockFace: 'HourlyCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
				    
		    clock.setTime(180);
		    clock.setCountdown(true);
		    clock.start();
		    
			var clock2;

			clock2 = $('.clock2').FlipClock({
		        clockFace: 'HourlyCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
				    
		    clock2.setTime(180);
		    clock2.setCountdown(true);
		    clock2.start();
            $( "span.flip-clock-divider" ).remove();
		});