# counter
A jQuery plugin to animate numbers.

### How To Use Counter

Copy/Paste counter.js in your project folder and then link it in your html file :

`<script src="js/counter.js"></script>`

Then in your html file, create a span containing the number to animate :

`<span class='counter'>12345</span>`

And call the transform_number function with javascript :

```
<script>
    transform_number($('.counter'), 200, 'fixed_width');
</script>
```

### Full example

Here is an example of what your file should look like :

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Example</title>
        <link href="css/style.css" rel="stylesheet">
    </head>
    
    <body>
        
        <div class="some-div"> <!-- your number can be out of a div of course -->
            <span class="counter">
                189383262705
            </span>
        </div>
        
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="js/counter.js"></script>
        <script>
            $('.counter').each(function() {
               transform_number($(this), 175, 'fixed_width'); 
            });
        </script>
        
    </body>
</html>
```
    
### Options

The transform_number takes 3 parameters :

* Selector : The span containing the number ( can be a class or an id )
* Speed ( in ms ) : The speed of the animation, I would recommend to use a speed between 200 and 400.
* Mode : There is 2 main modes :
  * 'fixed_width' : number is juste invisible, its width will stay the same. I recommend this one if the number is not surrounded by other things.
  * 'flex' : number is created during the animation, its width will progressively increase.
  
### CSS Recommendations 

I recommend you to give each figure a fixed width with css to avoid some weird behavior during the animation. Each figure has a class called *dig*, so for example :

```
.dig {
    width: 20px;
}
```