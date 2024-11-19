// ==UserScript==
// @name            CC&UUU
// @description     extension
// @namespace       delta.ogario
// @author          You
// @icon            https://deltav4.gitlab.io/ext/assets/favicon.ico
// @match           *://*/*
// @require         https://cdn.socket.io/3.1.2/socket.io.min.js
// @run-at          document-start
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    if (typeof io === 'undefined') {
        const socketScript = document.createElement('script');
        socketScript.src = "https://cdn.socket.io/3.1.2/socket.io.min.js";
        socketScript.onload = function() {
            initializeBot();
        };
        document.head.appendChild(socketScript);
    } else {
        initializeBot();
    }

    function initializeBot() {
    const BotServer = 'ws://localhost:8080';
    class GuiPanel {
        constructor() {
            this.botClient = {
                zoomValue: 0,
                server: null,
                mousePosition: { x: 0, y: 0 },
                protocolVersion: 0,
                clientVersion: 0,
                decryptionKey: 0
            };

            this.socket = io.connect(BotServer, { transports: ["websocket"] });
            this.loadSettings();
            this.botsContainer = null;
            this.started = false;
            this.WebSocket();
            window.onload = this.injectPanel.bind(this);
            this.MousePosition();
            this.trackMousePosition();
        }

        loadSettings() {
            this.botAmount = parseInt(localStorage.getItem('botAmount')) || 50;
            this.botName = localStorage.getItem('botName') || '';
            this.botSplitKeybind = localStorage.getItem('botSplitKeybind') || 'x';
            this.botFeedKeybind = localStorage.getItem('botFeedKeybind') || 'c';
            this.aiModeKeybind = localStorage.getItem('aiModeKeybind') || 'm';
        }

        WebSocket() {
            const originalSend = WebSocket.prototype.send;
            const self = this;

            WebSocket.prototype.send = function(buffer) {
                originalSend.call(this, buffer);
                if (this.url.includes(BotServer)) return;
                self.botClient.server = this.url;
                let msg = new DataView(new Uint8Array(buffer).buffer);
                switch (msg.getUint8(0)) {
                    case 254:
                        if (!self.botClient.protocolVersion) self.botClient.protocolVersion = msg.getUint32(1, true);
                        break;
                    case 255:
                        if (!self.botClient.clientVersion) self.botClient.clientVersion = msg.getUint32(1, true);
                        break;
                }
            };
        }

        trackMousePosition() {
            window.addEventListener("mousemove", event => {
                window.clientX = event.clientX;
                window.clientY = event.clientY;
            });
        }

        MousePosition() {
            setInterval(() => {
                if (window.app && window.app.unitManager && window.app.unitManager.units) {
                    this.botClient.zoomValue = window.app.stage.scale;
                    this.botClient.mousePosition.x = window.app.stage.mouseWorldX || app.stage.mouseWorldX;
                    this.botClient.mousePosition.y = window.app.stage.mouseWorldY || app.stage.mouseWorldY;
                }
            }, 10);
        }

        // GUI Panel
        injectPanel() {
            this.botsContainer = document.createElement("span");
            Object.assign(this.botsContainer.style, {
                boxShadow: "0px 0px 30px black",
                zIndex: "9999999",
                backgroundColor: "#444444",
                opacity: "0.7",
                width: "150px",
                height: "215px",
                top: "210px",
                left: "8px",
                position: "absolute",
                textAlign: "center",
                fontSize: "10.5px",
                color: "#fff",
                fontFamily: "monospace",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box"
            });

            this.createUIElements(this.botsContainer);
            document.body.appendChild(this.botsContainer);
            this.setupSocketEvents();
            this.setupKeybinds();
            setInterval(() => this.updateStatus(), 10);
        }

        createUIElements(container) {
            container.appendChild(this.createStatusElement());
            container.appendChild(this.createMinionsElement());
            container.appendChild(this.createLabelInputPair("Bots:", "number", this.botAmount, this.updateBotAmount.bind(this)));
            container.appendChild(this.createLabelInputPair("Name:", "text", this.botName, this.updateBotName.bind(this)));
            container.appendChild(this.createLabelInputPair("Split:", "text", this.botSplitKeybind, this.updateBotSplitKeybind.bind(this)));
            container.appendChild(this.createLabelInputPair("Feed:", "text", this.botFeedKeybind, this.updateBotFeedKeybind.bind(this)));
            container.appendChild(this.createLabelInputPair("AI:", "text", this.aiModeKeybind, this.updateAiModeKeybind.bind(this)));
            container.appendChild(this.createStartStopButton());
        }

        createStatusElement() {
            const statusElement = document.createElement("span");
            statusElement.style.paddingBottom = "7px";
            statusElement.style.color = "#ffffff";
            statusElement.innerHTML = "<a id='status'>Offline</a>";
            return statusElement;
        }

        createMinionsElement() {
            const minionsElement = document.createElement("div");
            minionsElement.style.color = "#ffffff";
            minionsElement.innerHTML = "Bots: <a id='minionCount'></a>/<a id='minionSpawned'></a><br>AI: <a id='aiMode'>Off</a>";
            return minionsElement;
        }

        createLabelInputPair(labelText, inputType, initialValue, onChange) {
            const pairContainer = document.createElement("div");
            pairContainer.style.display = "flex";
            pairContainer.style.alignItems = "center";
            pairContainer.style.margin = "1px";

            const label = document.createElement("label");
            label.innerHTML = labelText;
            label.style.width = "50px";

            const input = document.createElement("input");
            input.type = inputType;
            input.value = initialValue;
            input.style.width = "85px";
            input.style.backgroundColor = "transparent";
            input.style.color = "#fff";
            input.style.border = "1px solid white";
            input.addEventListener("input", (e) => onChange(e.target.value));

            pairContainer.appendChild(label);
            pairContainer.appendChild(input);
            return pairContainer;
        }

        createStartStopButton() {
            const button = document.createElement("button");
            button.id = "startStopButton";
            button.innerHTML = "Wait...";
            button.style.marginTop = "4px";
            button.style.marginBottom = "-2px";
            button.style.padding = "1px 2px";
            button.style.cursor = "pointer";
            button.style.border = "1px solid white";
            button.style.backgroundColor = "#444444";
            button.style.color = "white";
            button.disabled = true;

            setTimeout(() => {
                button.innerHTML = "Start";
                button.disabled = false;
            }, 1000);

            button.addEventListener("click", () => {
                if (document.getElementById("status").innerHTML !== "Offline") {
                    if (!this.started) {
                        this.startBots();
                    } else {
                        this.stopBots();
                    }
                }
            });

            return button;
        }

        // Sockets
        setupSocketEvents() {
            this.socket.on('connect', () => {
                this.socket.emit('updateBotName', { botName: this.botName });
                this.socket.emit('updateBotAmount', { botAmount: this.botAmount });
            });

            this.socket.on('started', () => {
                this.started = true;
                document.getElementById("status").innerHTML = 'Started';
                document.getElementById("status").style.color = "#90EE90";
                document.getElementById("startStopButton").innerHTML = "Stop";
            });

            this.socket.on('stopped', () => {
                this.started = false;
                document.getElementById("status").innerHTML = 'Stopped';
                document.getElementById("status").style.color = "#e00f00";
                document.getElementById("startStopButton").innerHTML = "Start";
            });

            this.socket.on('botCount', (connectedBots, spawnedBots) => {
                document.getElementById("minionCount").innerHTML = connectedBots;
                document.getElementById("minionSpawned").innerHTML = spawnedBots;
            });

            this.socket.on('aiMode', (mode) => {
                this.aiMode = mode === 'farming' ? 'Farming' : 'Follow';
                document.getElementById("aiMode").innerHTML = this.aiMode;
            });
        }

        startBots() {
            this.socket.emit('start', {
                ip: this.botClient.server,
                protocolVersion: this.botClient.protocolVersion,
                clientVersion: this.botClient.clientVersion,
                botAmount: this.botAmount
            });
        }

        stopBots() {
            const startStopButton = document.getElementById("startStopButton");
            startStopButton.innerHTML = "Stopping...";
            startStopButton.style.backgroundColor = "#444444";

            this.socket.emit('stop');
        }

        // Keybinds & Update
        setupKeybinds() {
            document.addEventListener("keydown", (event) => {
                if (!this.started) return;
                switch (event.key.toLowerCase()) {
                    case this.botSplitKeybind: this.socket.emit('split'); break;
                    case this.botFeedKeybind: this.socket.emit('eject'); break;
                    case this.aiModeKeybind:
                        this.aiMode = this.aiMode === 'Follow' ? 'Farming' : 'Follow';
                        this.socket.emit('aiMode');
                        document.getElementById("aiMode").innerHTML = this.aiMode;
                        break;
                }
            });
        }

        updateStatus() {
            const isConnected = this.socket.connected;
            const statusElement = document.getElementById("status");

            if (isConnected) {
                this.socket.emit('move', this.botClient.mousePosition.x, this.botClient.mousePosition.y);
                statusElement.innerHTML = 'Online';
            } else {
                this.started = false; // Ensure started is reset if disconnected
                statusElement.innerHTML = 'Offline';
                document.getElementById("minionCount").innerHTML = '~';
                document.getElementById("minionSpawned").innerHTML = '~';
                document.getElementById("aiMode").innerHTML = 'Off';
            }
        }

        updateBotAmount(value) {
            const amount = parseInt(value);
            if (amount >= 1 && amount <= 200) {
                localStorage.setItem('botAmount', amount);
                this.socket.emit('updateBotAmount', { botAmount: amount });
            }
        }

        updateBotName(name) {
            this.botName = name;
            localStorage.setItem('botName', name);
            this.socket.emit('updateBotName', { botName: name });
        }

        updateBotSplitKeybind(key) {
            this.botSplitKeybind = key;
            localStorage.setItem('botSplitKeybind', key);
        }

        updateBotFeedKeybind(key) {
            this.botFeedKeybind = key;
            localStorage.setItem('botFeedKeybind', key);
        }

        updateAiModeKeybind(key) {
            this.aiModeKeybind = key;
            localStorage.setItem('aiModeKeybind', key);
        }
    }

    const checkApp = setInterval(() => {
        if (window.app) {
            clearInterval(checkApp);
            new GuiPanel();
        }
    }, 100);
})();
