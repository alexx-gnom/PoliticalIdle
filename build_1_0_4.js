let unityContainer = document.getElementById("unity-container");
let canvas = document.getElementById("unity-canvas");
let fullscreenButton = document.querySelector("#unity-fullscreen-button");

function unityShowBanner(msg, type) {
}

let buildUrl = "/builds/Build";
let loaderUrl = buildUrl + "/05341b76d4a90f70e910dd0a415d4c33.loader.js";
let config = {
    dataUrl: buildUrl + "/5779bc76c88af660c14be8c1ff552ce5.data.br",
    frameworkUrl: buildUrl + "/45e7abf2b582da26b535b98ce2817fa0.framework.js.br",
    codeUrl: buildUrl + "/0b14e24e812336400d77b30b3ae84fde.wasm.br",
    streamingAssetsUrl: "/builds/StreamingAssets",
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