# FontStretch - jQuery Plugin

FontStretch adjusts the size of text to precisely fit within its container.

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
            <td>Fit the text element within the specified size. <em>Optional.</em></td>
        </tr>
        <tr>
            <td>sizeLimit</td>
            <td>999</td>
            <td>Limits the maximum font size to the specified value. <em>Optional.</em></td>
        </tr>
    </tbody>
</table>
