/*Write a program to the screen that operates on the numbers between 74 and 291.

For each number in the sequence, output the number to the screen. (JavaScript programmers can accomplish this with console.log(...) .) However, if the number is divisible by 3, output the word Buzz instead of the number. If the number is divisble by 5, output Fizz to the screen instead of the number. If the number is divisible by both, output BuzzFizz to the screen instead of the number.*/

for(let i=74;i<=291;i++)
	{  
		//checking for divisibility by both 3 and 5
		if(i%3===0&&i%5===0)
			{console.log("BuzzFizz"); }
		//checking for divisibility by  3 
		else if(i%3===0)
			{ console.log("Buzz");}
		//checking for divisibility by  5
		else if(i%5===0)
			{ console.log("Fizz");}
		//output number if divisible by neither 3 nor 5
		else console.log(i);
	}
	