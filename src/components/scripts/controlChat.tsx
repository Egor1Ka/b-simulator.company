import Script from 'next/script';

const ControlChat = () => (
  <>
    <Script id="controlChatInit" strategy="lazyOnload">
      {`
            window.ctrlSettings = {
                webWidget: {
                actorId: "3b149e07-a699-493e-9513-b980121b19e0"
                }
            };
    `}
    </Script>
    <Script id="ControlChat" strategy="lazyOnload">
      {`
        (function () {
            window.ctrl = window.ctrl || function () {
            (window.ctrl.q = window.ctrl.q || []).push(arguments);
            };
            var script = document.createElement("script");
            var parent = document.getElementsByTagName("script")[0].parentNode;
            script.async = 1;
            script.src = "https://widget.control.events/shim.js";
            parent.appendChild(script);
        })();
    `}
    </Script>
  </>

);

export default ControlChat;
