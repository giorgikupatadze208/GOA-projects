davaleba N2

function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be of type Number');
    }
    return a + b;
}

#ai magalitiad
try {
    const result = addNumbers(5, 7);
    console.log('Result:', result);
} catch (error) {
    console.error(error.message);
}



#davaleba N3

function concatenateStrings(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('string');
    }
    return str1 + str2;
}


try {
    const result = concatenateStrings('Hello, ', 'World!');
    console.log('Result:', result); // da iqeba hello world
} catch (error) {
    console.error(error.message);
}


#davaleba N4

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello world magalidat</title>
</head>
<body>
    <img id="image" src="example.jpg" alt="Example Image" width="300" height="200">
    <button id="resizeButton">shecvale zoma</button>

    <script src="script.js"></script>
</body>
</html>

// წამოვიღოთ HTML-დან
const image = document.getElementById('image');
const button = document.getElementById('resizeButton');

// mivutitot ras izavs gilaki dawerisas
button.addEventListener('click', () => {
    // axali zomebi
    const newWidth = 500;
    const newHeight = 300;

    // sigrzis da siganis shecvla
    image.width = newWidth;
    image.height = newHeight;

    console.log(`Image resized to: ${newWidth}px by ${newHeight}px`);
});


#davaleba N5

#htmlshi iqneba ese 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Image Source</title>
</head>
<body>
    <img id="image" src="image1.jpg" alt="Image 1" width="300" height="200">
    <button id="changeImageButton">Change Image</button>

    <script src="script.js"></script>
</body>
</html>

#javashi ese

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Image Source</title>
</head>
<body>
    <img id="image" src="image1.jpg" alt="Image 1" width="300" height="200">
    <button id="changeImageButton">Change Image</button>

    <script src="script.js"></script>
</body>
</html>


#madloba movrchi davalebas