        function changeColor() {
            let color = document.getElementById("signalColorInput").value.toLowerCase();
            let signalLight = document.getElementById("signalLight");
            let message = document.getElementById("message");

            if (color === "red") {
                signalLight.style.backgroundColor = "red";
                message.textContent = "Stop";
            }
            else if (color === "yellow") {
                signalLight.style.backgroundColor = "yellow";
                message.textContent = "Get Ready";
            } 
            else if (color === "green") {
                signalLight.style.backgroundColor = "green";
                message.textContent = "Go";
            } 
            else {
                alert("Invalid color Please enter red, yellow, or green.");
            }
        }
