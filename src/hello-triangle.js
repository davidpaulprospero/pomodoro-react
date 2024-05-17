function showError(errorText){
    const errorBoxDiv = document.getElementById('error-box');
    const errorTextElement = document.createElement('p');
    errorTextElement.innerText = errorText;
    errorBoxDiv.appendChild(errorTextElement);
    console.log(errorText);
}

showError('This is an error message!');

function helloTriangle(){ //WebGL Triangle sample code
    const canvas = document.getElementById('canvas');
    if (!canvas){
        showError('Failed to retrieve the <canvas> element');
        return;
    }
    const gl = canvas.getContext('webgl2'); //Get the WebGL rendering context
    if (!gl){ //If the rendering context is not obtained, display an error message
        const isWebGL1Supported = !!canvas.getContext('webgl');
        if (!isWebGL1Supported){ //If WebGL is not supported, display an error message
            showError('Your browser does not support WebGL');
        } else{ //If WebGL is supported but the rendering context is not obtained, display an error message
            showError('Failed to get the rendering context for WebGL');
        }
        return;
    }   

    gl.clearColor(0.08, 0.08, 0.08, 1.0); //Set the clear color to black
    gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);   //Clear the color buffer and the depth buffer 
}

try {
    helloTriangle(); //After defining the function, we call it
}   catch(e){
        showError(`Uncaught JavaScript error: ${e}`); //If an error occurs, we catch it and display it
    }