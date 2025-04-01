let unityContainer = document.getElementById("unity-container");
let canvas = document.getElementById("unity-canvas");
let fullscreenButton = document.querySelector("#unity-fullscreen-button");

function unityShowBanner(msg, type) {
}

let buildUrl = "https://alexx-gnom.github.io/PoliticalIdle/Build";
let loaderUrl = buildUrl + "/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js";
let config = {
    dataUrl: buildUrl + "/3bf5e67970e8d11865be97db6dfa5d5b.data",
    frameworkUrl: buildUrl + "/be359038ba615a03d3568de74c027735.framework.js",
    codeUrl: buildUrl + "/5fa33bdbb8072f94d3a79a3d4d842cc5.wasm",
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