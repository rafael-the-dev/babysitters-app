$0.addEventListener(
    'scroll',
    function()
    {
        var scrollTop = $0.scrollTop;
        var scrollHeight = $0.scrollHeight; // added
        var offsetHeight = $0.offsetHeight;
        var contentHeight = scrollHeight - offsetHeight; // added
        if (contentHeight <= scrollTop) // modified
        {
            console.log('scroll end');
            $0.onmousewheel = function(e) { 
                if(e.wheelDelta < 0)
                    e.preventDefault() 
            }
        }
        else if(scrollTop <= 0) {
            console.log('scroll start')
            $0.onmousewheel = function(e) { 
                if(e.wheelDelta > 0)
                    e.preventDefault() 
            }
        } else {
            $0.onmousewheel = function(e) {  }
        }
    },
    false
)