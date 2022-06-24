# CSS Tips and Tricks

## Box Model

    So in the box model every html tag is a box and the content inside of that box has following things:
    1. Width
    2. Height
    3. Internal Spacing/packing (Padding)
    4. Border
    5. External Spacing/packing (Margin)
    6. Everything in css or html is computed on the basis of Box model

## Developer's Tools

    Instead of chrome use Firefox Inspection / Developer's tools as they are comparatively fast, robust and allow us to edit the box model directly from the tools.

    It provides a breakdown of all the properties influencing the box model.

    It provides a GUI for flexing a gird layout.

    It also provides annotations in html.

## Flex box

    Use flexbox approach instead of bootstrap of tailwind to model all elements like centering a div or other stuff.

    When using a flexbox it allocates an x and y coordinates to it's content and we can use that coordinates to place the content.

    Example:

        .flex{
            display:flex;
            justify-content: center; X-axis
            align-item: center; Y-axis
        }

## Grid layout

    Flex is not suitable for complex UIs because everything will be covered in a wrapper / container and that would be very ugly to read.

    Grid is a modern feature and unlike flex it provide multiple columns and rows to place it's content into.

    Gird is way too similar to table layout but in simpler terms.

    Example:

        .grid{
            display:grid;
            
            grid-template-columns: 1fr 500px 1fr; //fr are fractional units and this line means we have three columns with respective width

            gird-template-rows: 100px 200px; // height of rows

            place-item:center; //Content placement for rows and columns

        }

## Use clamps

    So instead of using media queries for responsive layout use clamps with integrated functions like min, max and preferred.
    These will help you avoid media queries for different screen sizes.

    Example:

        .article{
            width: clamp(200px,50%,600px); //min,preferred,max values
        }

## Constant Ration for Content

    Let say you have a situation where you need to keep a video or a picture to a certain position at a certain aspect ratio what we do conventionally is as follows:

        .container-16x9{
            position: relative;
            padding-top: 56.25%; //for 16x9 ratio
        }

        Video/img {
            width: 100%;
            position: absolute; // to keep it moving from the fixed position
            top:0;
        }

    What we can do on modern css is to use aspect-ratio property this is not supported everywhere but works like a charm.

    Example:

        Video{
            width:100%;
            aspect-ratio:16/9;
        }

## Global Variables

    To avoid redundancy and to refactor everything we can define variable like this:

    :root{
        --var-name: rgb(255,0,0)
        --container-width:80%;
        --container-height:50$;
    }

    .container{
        background-color: var(--var-name);
        width: var(--container-width);
        height: var(--container-height);
    }

## Use Calc and Global Variables for Animation

    Let say you have some falling down sequential animations so instead of using animation delay for everything use global variables as inline css and use that with calc function to create that soothing effect in 1 line.

    Example:

        <i class="frop ace" style="--order:1"> 1 </i>
        <i class="frop duo" style="--order:2"> 2 </i>
        <i class="frop tri" style="--order:3"> 3 </i>

    in css file:

        .drop{
            animation: dropIn 1s ease forwards;
            animation-delay: calc(var(--order) * 100ms);
        }

        @keyframes dropIn{
            from {transform: translateY(-500px);}
            to {transform: translateY(0);}
        }

## Use global variables for dynamic headers

    use this trick to add counter to your heading dynamically.
    :root{
        counter-rest: headings;
    }

    h1{
        counter-increment:headings;
    }

    h1::before{
        content:counter(headings);
    }

## Focus-within

    It often happens a lot that when we click a button and animate a dropdown it loses focus when we move our cursor to avoid that we should use this property of shifting focus to the children of that parent.

    example:
        .dropdown{
            opacity: 0;
            visibility:hidden;
        }
    button:focus-within .dropdown{
        opacity:1;
        visibility:visible;
    }

## Post CSS

    This toolkit adds all the required stuff and enables features on the target browsers if they are not supported.