# FontStretch - jQuery Plugin

FontStretch adjusts the size of text to fit within its containing element.

## Usage

HTML:

    <!DOCTYPE html>
    <html>
        <head>
            <title>FontStretch</title>
        </head>
        <body>
            <div class="tagline">The quick brown fox...</div>
            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
            <script type="text/javascript" src="jquery.fontstretch.js"></script>
        </body>
    </html>

JS:

    $('.tagline').fontStretch();

## Options

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>width</td>
            <td>null</td>
            <td><em>Optional.</em> Fit the text element within the specified size in pixels. Otherwise, grab the width of the element.</td>
        </tr>
        <tr>
            <td>sizeLimit</td>
            <td>999</td>
            <td><em>Optional.</em> Limits the maximum font size to the specified value.</td>
        </tr>
        <tr>
            <td>sizeOffset</td>
            <td>1</td>
            <td><em>Optional.</em> Start calculating font sizes from the specified value.</td>
        </tr>
        <tr>
            <td>sizeIncrement</td>
            <td>1</td>
            <td><em>Optional.</em> Increment with the specified value while calculating the font size, useful for bigger fonts to reduce the number of loops.</td>
        </tr>
    </tbody>
</table>
