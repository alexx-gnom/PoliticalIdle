let unityContainer = document.getElementById("unity-container");
let canvas = document.getElementById("unity-canvas");
let fullscreenButton = document.querySelector("#unity-fullscreen-button");

function unityShowBanner(msg, type) {
}

let buildUrl = "https://alexx-gnom.github.io/PoliticalIdle/Build";
let loaderUrl = buildUrl + "/05341b76d4a90f70e910dd0a415d4c33.loader.js";
let config = {
    dataUrl: buildUrl + "/54b59608eb4fc6ae697d43e44530d019.data",
    frameworkUrl: buildUrl + "/4e7df510288025284d121be8d2a79f07.framework.js",
    codeUrl: buildUrl + "/dd4ab8c3f855bcbc79e4146f457e784d.wasm",
    streamingAssetsUrl: "https://alexx-gnom.github.io/PoliticalIdle/StreamingAssets",
    companyName: "MysteryTag",
    productName: "Trump’s Empire",
    productVersion: "1.0",
    showBanner: unityShowBanner,
};


if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    let meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
    unityContainer.className = "unity-mobile";
    canvas.className = "unity-mobile";
} else {
    canvas.style.width = '100vw';
    canvas.style.height = 'calc(100vh + 5px)';
}
let script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
    }).then((unityInstance) => {
        App.unityResolved(unityInstance);
    }).catch((message) => {

    });
};
document.body.appendChild(script);