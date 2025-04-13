let unityContainer = document.getElementById("unity-container");
let canvas = document.getElementById("unity-canvas");
let fullscreenButton = document.querySelector("#unity-fullscreen-button");

function unityShowBanner(msg, type) {
}

let buildUrl = "https://alexx-gnom.github.io/PoliticalIdle/Build";
let loaderUrl = buildUrl + "/868ad3e5f43e7a2d53d450d58e45443c.loader.js";
let config = {
    dataUrl: buildUrl + "/19e355a8eecd76f28cc35007c0aefd49.data",
    frameworkUrl: buildUrl + "/6f2b01e47bb37a36e190b88899f750bb.framework.js",
    codeUrl: buildUrl + "/2d26da73c8717a0aa2ccecc5583027b8.wasm",
    streamingAssetsUrl: "https://alexx-gnom.github.io/PoliticalIdle/StreamingAssets",
    companyName: "Trump’s Empire",
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