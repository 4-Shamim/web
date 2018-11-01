
// Assuming we have an empty <div id="container"></div> in
// HTML
// var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
// bar.animate(1);

var line = new ProgressBar.Line("#line", {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' }
});

var circle = new ProgressBar.Circle("#circle", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

var semi_circle = new ProgressBar.SemiCircle("#semi-circle", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FF0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var withText = new ProgressBar.Circle("#with-lable", {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
withText.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
withText.text.style.fontSize = '2rem';

withText.animate(1.0);  // Number from 0.0 to 1.0

line.animate(1.0);  // Number from 0.0 to 1.0
circle.animate(1.0);  // Number from 0.0 to 1.0
semi_circle.animate(1.0);  // Number from 0.0 to 1.0

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();


/* Custom */

function addAnimation(name, body) {
    let dynamicStyles = null;
    let style;

    if (dynamicStyles) {
        style = dynamicStyles;
    } else {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);

        style = dynamicStyles;
    }

    dynamicStyles.sheet.insertRule(`@keyframes ${name} {
    ${body}
  }`, dynamicStyles.length);
}

var skill = document.getElementsByClassName("skillbar");

// for (let e of skill) {
//     var data_percent = e.getAttribute("data-percent");
//     var bar = e.querySelector(".skillbar-bar");
//     addAnimation('myAnimation', `
//         0% { width: ${0}; }
//         100% { width: ${data_percent};
//     `);
//     bar.style.animation = 'myAnimation 1s ease forwards';
    
// }

for (let e of skill) {
    var data_percent = e.getAttribute("data-percent");
    var data_percent = data_percent.substr(0, data_percent.length - 1);
    console.log(data_percent);
    var elementWidth = e.offsetWidth;
    console.log(elementWidth);
    var loading_width = parseInt((elementWidth * data_percent) / 100);
    console.log(loading_width); 
    var bar = e.querySelector(".skillbar-bar");
    myMove(bar, loading_width, 1);
}

function myMove(bar, value, time) {
    var pos = 0;
    
    var id = setInterval(frame, time) 

    function frame() {
        if (pos == value) {
            clearInterval(id);
        } else {
            pos++;
            bar.style.width = pos + "px";
        }
    }
}



// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });