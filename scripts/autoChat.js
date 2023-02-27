window.onload = function() {
    console.log("auto chat loaded")

    function sidebarToggle(){
        let position = document.getElementsByTagName("aside")[0].style.right == "0px" ? "-480px" : "0px";
        document.getElementsByTagName("aside")[0].style.right = position;
        document.getElementsByClassName("toggle-button")[0].classList.toggle('active-toggle');
    };

    function keypressEnter(){
        document.getElementsByName("chatbox2")[0].dispatchEvent(new KeyboardEvent('keydown', {bubbles:true, key:'Enter', code:"Enter", location:0, repeat:false, isComposing:false, charCode:0, keyCode:13, which:13 }));
        document.getElementsByName("chatbox2")[0].dispatchEvent(new KeyboardEvent('keypress', {bubbles:true, key:'Enter', code:"Enter", location:0, repeat:false, isComposing:false, charCode:13, keyCode:13, which:13 }));
        document.getElementsByName("chatbox2")[0].dispatchEvent(new KeyboardEvent('keyup', {bubbles:true, key:'Enter', code:"Enter", location:0, repeat:false, isComposing:false, charCode:0, keyCode:13, which:13 }));
    };

    function connectionCheck(){
        setInterval(function(){
            let lostConnection = document.getElementsByClassName("msg right-round")[0];
            
            if(lostConnection === undefined){
                console.log("running");
            }
            else{
                console.log("connection lost");
                document.querySelector('#alarm-audio').play()
            }

        }, 500);
    };

    function deliverMsg(){
        let closeChatbox = document.getElementsByClassName("_close_1pskg_223");
        for (var i = closeChatbox.length - 1; i >= 0; i--)
        {
            console.log(closeChatbox[i]);
            closeChatbox[i].click();
        };

        let message = document.getElementById("message").value;
        console.log(message);

        setTimeout(function(){
            let tradeBar = document.querySelector('[title="Trade"]');
            tradeBar.click();
        }, 2000);

        setTimeout(function(){
            document.getElementsByName("chatbox2")[0].focus();
            document.getElementsByName("chatbox2")[0].value = message;
            keypressEnter();
        }, 3000);

    };

    var InitialCounter;
    function initialRun() {
        if (!InitialCounter) {
            InitialCounter = true;
            deliverMsg();
        }
    };

    let hiddenCity = document.getElementById("quick-links");
    let visibleCity = document.getElementById("quick-links-fix");
    if (typeof(hiddenCity) != 'undefined' && hiddenCity != null)
    {
      hiddenCity.replaceWith(visibleCity);
    };

    let toggle = document.getElementById("toggle");
    
    toggle.addEventListener('click', function(){
        sidebarToggle();

    });
    
    let stopBtn = document.getElementById("stop");

    stopBtn.addEventListener('click', function(){
        window.location.reload();
    });

    let startBtn = document.getElementById("start");

    startBtn.addEventListener('click', function(){
        sidebarToggle();

        let hours = document.getElementById("hours").value;
        let minutes = document.getElementById("minutes").value;

        let minToMil = minutes*60000;
        let hourToMil = hours*3600000;

        let timeout = minToMil+hourToMil;

        setTimeout(function(){
           alert("Time Finished");
           window.location.reload();
        }, timeout);

        initialRun();

        setTimeout(function(){
            setInterval(function(){ 
                deliverMsg();
            }, 60000);
        }, 5000)

        connectionCheck();

    });
};

