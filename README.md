# FontStretch - jQuery Plugin

FontStretch adjusts the size of text to precisely fit within its container.

## Usage

HTML:

    <html>
        <body>
            <div class="tagline">The quick brown fox...</div>
        </body>
    </html>

JS:

    $('.tagline').textfit({
        fontClass: 'particular-font',
        width: 250 // Optionally, specify an explicit width in px
    });

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
            <td>Optionally, will constrain element within the specified size.</td>
        </tr>
        <tr>
            <td>sizeLimit</td>
            <td>999</td>
            <td>Optionally, will limit the maximum font size to the specified value.</td>
        </tr>
    </tbody>
</table>
