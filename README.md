# cron-scheduler
mylo test question 2

Input from CLI, I could not finish the read from text file. 

My program takes the input arguments and organizes them into s, m & hrs. First I get local computer time, (switch to EST Tz) then add the wild card inputs. Time2 is 0:0:0 plus the time until the scheduled task. 

Then I take the duration (difference) between the two times and output them in seconds.

Complexity for time is N. With implementing the read file functionality it would be n^2 if I looped through to read everytime I called funtion, or log(n) if I grabbed all inputs on first loop.
complexity for space is log(n). It is not linear, however with more inputs would not grow exponentially. 