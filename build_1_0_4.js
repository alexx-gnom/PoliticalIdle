let unityContainer = document.getElementById("unity-container");
let canvas = document.getElementById("unity-canvas");
let fullscreenButton = document.querySelector("#unity-fullscreen-button");

function unityShowBanner(msg, type) {
}

let buildUrl = "https://alexx-gnom.github.io/PoliticalIdle/Build";
let loaderUrl = buildUrl + "/05341b76d4a90f70e910dd0a415d4c33.loader.js";
let config = {
    dataUrl: buildUrl + "/075fa3b65f57b257c61797bdded8ca4b.data",
    frameworkUrl: buildUrl + "/809b99cb30427481faf97c8892c55289.framework.js",
    codeUrl: buildUrl + "/f89d1cced7ff28252b799810e5d52dac.wasm",
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