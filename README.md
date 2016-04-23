# counter
A jQuery plugin to animate numbers.

## How To Use Counter

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
    